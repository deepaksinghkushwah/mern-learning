const User = require("../models/User");
const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");

// register user
// @route GET /api/v1/auth/register
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const role = "registered";
  try {
    // create user
    const user = await User.create({
      name,
      email,
      role,
      password,
    });

    const nuser = await User.findOne({ email }).select({
      name: 1,
      email: 1,
      role: 1,
      id: 1,
    });   

    sendTokenResponse(nuser, 200, res);
  } catch (error) {
    return next(new ErrorResponse(error, 400));
  }
});

// login user
// @route GET /api/v1/auth/login
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // check user
  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // check password amtch
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  user = await User.findOne({ email }).select({
    name: 1,
    email: 1,
    role: 1,
    id: 1,
  });

  sendTokenResponse(user, 200, res);
});

// get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // create token
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};
