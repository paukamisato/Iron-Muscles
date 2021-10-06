const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  photo: {
    type: String,
    required: true, 
  },
  mainMuscleInvolved: {
    type: String,
    enum: [
      "abs",
      "back",
      "chest",
      "shoulders",
      "biceps",
      "triceps",
      "forearm",
      "glutes",
      "upper legs",
      "lower legs",
      "cardio",
    ],
    required: true,
  },
  equipment: {
    type: String,
  },
  instructions: {
    type: String,
    required: true,
  },
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
