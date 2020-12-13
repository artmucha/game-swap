import dbConnect from 'utils/dbConnect';
import User from 'models/User';

dbConnect();

export default async (req, res) => {
  const {
    query: {uid},
    method 
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
        const user = await User.findOneAndUpdate(
          uid, 
          { $addToSet: { wishlist: req.body } },
          { new: true,
            useFindAndModify: true 
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
            useFindAndModify: true 
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