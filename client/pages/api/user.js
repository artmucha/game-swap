import dbConnect from 'utils/dbConnect';
import User from 'models/User';

dbConnect();

export default async (req, res) => {
  const {
    query: { _id }, 
    method 
  } = req;

  switch(method) {
    case 'GET':
      try {
        const user = await User.findById(_id);
        if(!user) return res.status(400).json({success: false});
        res.status(200).json({success: true, data: user});
      } catch(error) {
        res.status(400).json({success: false});
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({success: true, data: user});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case 'PUT':
      try {
        const user = await User.findByIdAndUpdate(_id, req.body, {
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
        const deleteUser = await User.deleteOne({_id : _id});
        if(!deleteUser) res.status(400).json({success: false});
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