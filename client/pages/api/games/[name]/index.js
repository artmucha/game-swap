import dbConnect from 'utils/dbConnect';
import Game from 'models/Game';

dbConnect();

export default async (req, res) => {
  const { 
    method,
    body: { page }, 
  } = req;

  const currentPage = page || 1;
  const perPage = 15;

  switch(method) {
    case 'POST':
      const name = req.query.name ? { 'platform.value.name' : req.query.name } : {};
      const title = req.body.title ? { title: { $regex : new RegExp(req.body.title, 'i') } } : {};
      const id = req.body.id ? { 'genres.id': req.body.id } : {};

      try {
        const games = await Game.find({ ...name, ...title, ...id })
          .skip((currentPage - 1) * perPage)
          .limit(perPage);
        const totalGames = await Game.find({ ...name, ...title, ...id }).countDocuments();

        res.status(200).json({
          success: true, 
          data: games,
          currentPage: Number(currentPage),
          maxPage: Math.ceil(totalGames / perPage)
        });
      } catch(error) {
        res.status(400).json({success: false});
      }
      break;
    default: 
      res.status(400).json({success: false});
      break;
  }
};