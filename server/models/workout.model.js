const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    enum: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    required: true,
  },
  date: {
    type: Date,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
  duration: {
    type: Number,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
