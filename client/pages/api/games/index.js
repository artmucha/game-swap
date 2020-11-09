import dbConnect from 'utils/dbConnect';
import Game from 'models/Game';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch(method) {
    case 'GET':
      try {
        const games = await Game.find({});
        res.status(200).json({success: true, data: games});
      } catch(error) {
        res.status(400).json({success: false});
      }
      break;
    case 'POST':
      try {
        const game = await Game.create(req.body);
        res.status(201).json({success: true, data: game});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    default: 
      res.status(400).json({success: false});
      break;
  }
};