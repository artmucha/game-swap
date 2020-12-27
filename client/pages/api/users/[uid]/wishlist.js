import dbConnect from 'utils/dbConnect';
import User from 'models/User';

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
        if(!user) return res.status(400).json({success: false});
        res.status(200).json({success: true, data: user});
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