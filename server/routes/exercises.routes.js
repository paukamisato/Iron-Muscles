const express = require("express");
const Exercise = require("../models/exercise.model");
const router = express.Router();

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error retrieving exercises", err })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Exercise.findById(id)
    .then((exercise) =>
      res.status(200).json({ exercise, message: "Exercise getted" })
    )
    .catch((err) =>
      res.status(500).json({
        code: 500,
        message: "Error retrieving a single exercise",
        err: err.message,
      })
    );
});

router.post("/", (req, res) => {
  const { name, photo, mainMuscleInvolved, equipment, instructions } = req.body;
  console.log("server", req.body);
  Exercise.create({
    name,
    photo,
    mainMuscleInvolved,
    equipment,
    instructions
  })
    .then((exercise) =>
      res.status(200).json({ exercise, message: "Exercise created" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({
          code: 500,
          message: "Error creating exercise",
          err: err.message,
        })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Exercise.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: `Exercise ${id} deleted` }))
    .catch((err) =>
      res.status(500).json({
        code: 500,
        message: "Error deleting exercise",
        err: err.message,
      })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Exercise.findByIdAndUpdate(id, req.body, { new: true })
    .then((exercise) =>
      res.status(200).json({ exercise, message: "Exercise edited" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error editing", err })
    );
});

module.exports = router;
