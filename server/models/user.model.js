const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "trainer", "admin"],
      default: "user",
      required: true,
    },
    photo: {
      type: String,
      default: "", //aqui falta poner foto por defecto
    },
    personal_data: {
      name: String,
      lastname: String,
      age: Number,
      gender: String,
      height: Number,
      weight: Number,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
