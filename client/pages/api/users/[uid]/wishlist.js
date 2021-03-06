import dbConnect from 'utils/dbConnect';
import User from 'models/User';
import Game from 'models/Game';

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: {uid},
    body: {id}
  } = req;

  switch(method) {
    case 'GET':
      try {
        const user = await User.findOne({uid});
        const games = await Game.find({
          id: { $in: user.wishlist }
        });
        res.status(200).json({success: true, data: games});
      } catch(error) {
        res.status(400).json({success: false});
      }
      break;
    case 'POST':
      try {
        const likedID = await User.findOne({wishlist: { $in: id }});
        const operator = likedID ? '$pull' : '$addToSet';

        const user = await User.findOneAndUpdate(
          uid, 
          { [operator]: { wishlist: id } },
          { new: true,
            useFindAndModify: false 
          }
        );

        res.status(200).json({success: true, data: user});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case 'DELETE':
      try {
        const user = await User.findOneAndUpdate(
          uid, 
          { $pull: { wishlist: req.body } },
          { new: true,
            useFindAndModify: false 
          }
        );
        res.status(200).json({success: true, data: user });
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    default: 
      res.status(400).json({success: false});
      break;
  }
};