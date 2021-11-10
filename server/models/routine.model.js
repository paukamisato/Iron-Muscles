const { Schema, model, SchemaTypes } = require("mongoose");

const routineSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],

  daysPerWeek: {
    type: String,
    enum: ["1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "7 days"],
    required: true,
  },

  difficultyLevel: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
});

const Routine = model("Routine", routineSchema);

module.exports = Routine;
