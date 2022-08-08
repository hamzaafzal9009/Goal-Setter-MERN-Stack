const asyncHandler = require("express-async-handler");
// @desc Get Goals
// @route GET /api/goals/
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Getting goals..." });
});

// @desc Get Goals by ID
// @route GET /api/goals/:id
// @access Private

const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get goal... ${req.params.id}` });
});

// @desc Set Goals
// @route POST /api/goals
// @access Private

const setGoal =  asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Invalid JSON response  from server`);
  }
  res.status(200).json({ message: `Setting goal...}` });
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
