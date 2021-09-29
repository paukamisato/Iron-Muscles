const express = require("express");
const Workout = require("../models/workout.model");
const Exercise = require ("../models/exercise.model.js")
const router = express.Router();

router.get("/", (req, res) => {
  Workout.find()
    .select("title imageUrl")
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error retrieving Workouts", err: err.message })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Workout.findById(id)
    .populate('exercises')
    .then((workout) =>
      res.status(200).json({ workout, message: "Workout getted" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error retrieving a single workout", err: err.message })
    );
});

router.post("/", (req, res) => {
  const workout = req.body;
  Workout     
    .create({...workout, owner: req.session.currentUser._id})
    .then((workout) =>
      res.status(200).json({ workout, message: "Workout created" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error creating workout", err: err.message })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Workout.findByIdAndDelete(id)
    .populate('exercises')
    .then(() => res.status(200).json({ message: `Workout ${id} deleted` }))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error deleting workout", err: err.message })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Workout.findByIdAndUpdate(id, req.body, { new: true })
    .populate('exercises')
    .then((workout) =>
      res.status(200).json({ workout, message: "Workout edited" })
    )
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error editing", err: err.message })
    );
});

module.exports = router;
