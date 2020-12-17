const express = require('express');
const workoutController = require('../controllers/workout.controller');

const router = express.Router();

router
  .route('/')
  .post(workoutController.createWorkout)
  .get(workoutController.getAllWorkouts)

router
  .route('/:workoutId')
  .put(workoutController.addExercise)

router
  .route('/range')
  .get(workoutController.getAllWorkouts)

module.exports = router;
