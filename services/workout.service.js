const httpStatus = require('http-status');
const { Workout } = require('../models');
const ApiError = require('../utils/ApiError');
var ObjectID = require('mongodb').ObjectID;

/**
 * Create a workout
 * @param {Object} workoutBody
 * @returns {Promise<Workout>}
 */
const createWorkout = async (workoutBody) => {
  const workout = await Workout.create({ _id: new ObjectID(), ...workoutBody });
  return workout;
};

/**
 * Get all workouts
 * @returns {Promise<Workouts>}
 */
const getAllWorkouts = async () => {
  const workouts = await Workout.find({});
  return workouts;
};

/**
 * Get workout by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getWorkoutById = async (id) => {
  return Workout.findById(id);
};

/**
 * Add new exercise to workout by id
 * @param {ObjectId} workoutId
 * @param {Object} exerciseBody
 * @returns {Promise<Workout>}
 */
const addExercise = async (workoutId, exerciseBody) => {
  const workout = await getWorkoutById(workoutId);
  if (!workout) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Workout not found');
  }
  workout.exercises.push(exerciseBody);
  await workout.save();
  return workout;
};


module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
  addExercise,
};
