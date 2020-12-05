import User from 'models/User';

export default async(req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({success: true, data: user});
  } catch (error) {
    res.status(400).json({success: false});
  }
};