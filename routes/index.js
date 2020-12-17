const express = require('express');
const workoutRoute = require('./workout.route');

const router = express.Router();

router.use('/workouts', workoutRoute);

module.exports = router;
