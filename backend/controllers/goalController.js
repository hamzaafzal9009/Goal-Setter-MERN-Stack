const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModal");

// @desc Get Goals
// @route GET /api/goals/
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
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
  });
  res.status(200).json(goal);
});

// @desc Update Goals
// @route Put /api/goals/id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updating goal... ${req.params.id}}` });
});

// @desc Delete Goals
// @route delete /api/goal/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal... ${req.params.id}` });
});

module.exports = {
  getGoals,
  getGoal,
  setGoal,
  deleteGoal,
  updateGoal,
};
