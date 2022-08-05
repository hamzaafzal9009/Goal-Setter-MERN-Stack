const getGoals = (req, res) => {
    res.status(200).json({ message: "Getting goals..." });
};

module.exports = {
  getGoals,
};
