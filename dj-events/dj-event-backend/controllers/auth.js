import User from "../models/users.js";
import jwt from "jsonwebtoken";
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const vp = await user.validatePassword(password);

    if (vp === false) res.status(400).json({ error: "Invalid password" });
    
    const token = jwt.sign({
      email: user.email,
      id: user._id,
      user: user,
      exp: Math.floor(Date.now() / 1000) + (60 * 60)
    },process.env.SECRET_KEY);

    res.status(200).json({success: true, token: token});
  } else {
    res.status(400).json({ error: "User not found" });
  }
  res.status(200);
};
