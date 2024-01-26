import jwt from "jsonwebtoken";
import User from "../models/users.js";
export default async (req, res, next) => {
  const token = req.headers.authorization.split("Bearer ")[1];
  if (!token) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken.id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      error: "Invalid request",
    });
  }
};
