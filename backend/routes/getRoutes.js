const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Getting goals..." });
});
router.post("/", (req, res) => {
  res.status(200).json({ message: "setting goals..." });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `get goals... ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `deleting goal... ${req.params.id}` });
});

module.exports = router;
