import dbConnect from 'utils/dbConnect';
import User from 'models/User';
import validator from 'utils/formValidators';

dbConnect();

export default async(req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({success: true, data: user});
  } catch (error) {
    validator(error, res);
  }
};