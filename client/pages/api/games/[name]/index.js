import dbConnect from 'utils/dbConnect';
import Game from 'models/Game';

dbConnect();

export default async (req, res) => {
  const { 
    method,
    query: { name }, 
 } = req;

  switch(method) {
    case 'GET':
      try {
        const games = await Game.find({'platform.value.name' : name});
        res.status(200).json({success: true, data: games});
      } catch(error) {
        res.status(400).json({success: false});
      }
      break;
    default: 
      res.status(400).json({success: false});
      break;
  }
};