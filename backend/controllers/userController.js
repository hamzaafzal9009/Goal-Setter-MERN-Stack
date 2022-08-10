const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("../models/userModel");

// @desc Registering User
// @route POST /api/users/login/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Add all fields");
  }

  //   Check if the user is already registered
  const userExists = await Users.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User is already registered");
  }

  //   Hash the user's password
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  //    Create a new User
  const user = await Users.create({ email, name, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc Authenticating User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check for the User Email
  const user = await Users.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  }else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// @desc Getting User Data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
