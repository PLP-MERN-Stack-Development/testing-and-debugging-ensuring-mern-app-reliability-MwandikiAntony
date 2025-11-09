
const express = require("express");
const Bug = require("../models/Bug");

const router = express.Router();

// Create a new bug
router.post("/", async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all bugs
router.get("/", async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a bug
router.put("/:id", async (req, res) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a bug
router.delete("/:id", async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bug deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
