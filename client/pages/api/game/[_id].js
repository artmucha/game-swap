import dbConnect from 'utils/dbConnect';
import Game from 'models/Game';

dbConnect();

export default async (req, res) => {
  const {
      query: { _id }, 
      method 
    } = req;

  switch(method) {
    case 'GET':
      try {
        const game = await Game.findById(_id);
        if(!game) return res.status(400).json({success: false});
        res.status(200).json({success: true, data: game});
      } catch(error) {
        res.status(400).json({success: false});
      }
      break;
    case 'PUT':
      try {
        const game = await Game.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        });
        if(!game) return res.status(400).json({success: false});
        res.status(200).json({success: true, data: game});
        
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case 'DELETE':
      try {
          const deletedGame = await Game.deleteOne({_id : _id});
          if(!deletedGame) res.status(400).json({success: false});
          res.status(200).json({success: true, data: {} });
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    default: 
      res.status(400).json({success: false});
      break;
  }
};