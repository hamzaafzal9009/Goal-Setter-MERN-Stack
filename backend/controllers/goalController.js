const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModal");
const User = require("../models/userModal");

// @desc Get Goals
// @route GET /api/goals/
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  if (!goals) {
    res.status(400);
    throw new Error(`Goal not found`);
  }
  res.status(200).json(goals);
});

// @desc Get Goals by ID
// @route GET /api/goals/:id
// @access Private
const getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  res.status(200).json(goal);
});

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Invalid JSON response  from server`);
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

// @desc Update Goals
// @route Put /api/goals/id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found`);
  }

  //  Check  for user
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error(`User not found`);
  }

  //  Making sure the login user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error(`User not authorized`);
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc Delete Goals
// @route delete /api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found`);
  }
  //  Check  for user
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error(`User not found`);
  }

  //  Making sure the login user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error(`User not authorized`);
  }
  await Goal.findOneAndDelete(req.params.id);
  // await goal.remove();
  res.status(200).json("Goal deleted Successfully");
});

module.exports = {
  getGoals,
  getGoal,
  setGoal,
  deleteGoal,
  updateGoal,
};
