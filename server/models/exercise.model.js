const { Schema, model } = require("mongoose");


const exerciseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required:true  
  },
  photo:{
    type: String,
    required:true 
  }, 
  mainMuscleInvolved:{
    type: String,
    enum:['Back','Chest','Shoulders','Biceps','Triceps','Forearm','Glutes','Upper Legs','Lower Legs','cardio'],
    required:true 
  },
  equipment:{
    type: [String],
  },
  instructions:{
    type: String,
    required:true 
  },

});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
