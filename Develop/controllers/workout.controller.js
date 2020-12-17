const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { workoutService } = require('../services');

const createWorkout = catchAsync(async (req, res) => {
  const user = await workoutService.createWorkout(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getAllWorkouts = catchAsync(async (req, res) => {
  const result = await workoutService.getAllWorkouts();
  res.send(result);
});

const addExercise = catchAsync(async (req, res) => {
  const workout = await workoutService.addExercise(req.params.workoutId, req.body);
  res.send(workout);
});

module.exports = {
  createWorkout,
  getAllWorkouts,
  addExercise,
};
