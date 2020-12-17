const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const exerciseSchema = mongoose.Schema(
  {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
  }
)
const workoutSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    day: {
      type: Date,
      required: true,
    },
    exercises: [exerciseSchema],
  }
);

// // add plugin that converts mongoose to json
workoutSchema.plugin(toJSON);

/**
 * @typedef Workout
 */
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
