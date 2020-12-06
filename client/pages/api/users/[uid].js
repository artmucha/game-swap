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
    case 'PUT':
      try {
        const user = await User.findByIdAndUpdate(uid, req.body, {
            new: true,
            runValidators: true
        });
        if(!user) return res.status(400).json({success: false});
        res.status(200).json({success: true, data: user});
        
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case 'DELETE':
      try {
          const deletedUser = await User.deleteOne({uid : uid});
          if(!deletedUser) res.status(400).json({success: false});
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