const express = require('express');
const Routine = require('../models/routine.model')
const Workout = require ('../models/workout.model')
const router = express.Router();

router.get("/", (req, res) => {
  Routine.find()
    .then((routines) => res.status(200).json(routines))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error retrieving routines", err: err.message })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Routine.findById(id)
    .populate('workouts')
    .then((routine) =>
      res.status(200).json({ routine, message: "Routine getted" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error retrieving a single routine", err: err.message })
    );
});

router.post("/", (req, res) => {
  const { name, workouts, daysPerWeek, difficultyLevel } = req.body;
  console.log("routine",req.body)
  Routine
    .create({ name, workouts, daysPerWeek, difficultyLevel, owner: req.session.currentUser._id })    
    .then((routine) =>
      res.status(200).json({ routine, message: "routine created" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error creating routine", err: err.message })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Routine.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: `Routine ${id} deleted` }))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error deleting workout", err: err.message })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Routine.findByIdAndUpdate(id, req.body, { new: true })
    .populate('workouts')
    .then((routine) =>
      res.status(200).json({ routine, message: "routine edited" })
    )
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error editing", err: err.message })
    );
});

module.exports = router;
