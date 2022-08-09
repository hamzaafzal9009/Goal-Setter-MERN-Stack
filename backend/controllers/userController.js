const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");

// @desc Registering User
// @route POST /api/users/login/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Registering user..." });
});

// @desc Authenticating User
// @route POST /api/users/
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Logging user..." });
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
  getMe
};
