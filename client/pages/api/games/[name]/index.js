import dbConnect from 'utils/dbConnect';
import Game from 'models/Game';

dbConnect();

export default async (req, res) => {
  const { 
    method,
    query: { name }, 
    body: { id, page }, 
  } = req;

  const currentPage = page || 1;
  const perPage = 15;

  switch(method) {
    case 'POST':
      let games = [];
      let totalGames = null;
      try {
        if(id) {
          games = await Game.find({ 'platform.value.name' : name, 'genres.id' : id })
            .skip((currentPage - 1) * perPage)
            .limit(perPage);
          totalGames = await Game.find({ 'platform.value.name' : name, 'genres.id' : id }).countDocuments();
        } else {
          games = await Game.find({ 'platform.value.name' : name })
            .skip((currentPage - 1) * perPage)
            .limit(perPage);
          totalGames = await Game.find({ 'platform.value.name' : name }).countDocuments();
        }

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