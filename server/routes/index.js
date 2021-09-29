const router = require("express").Router();
const workoutsRouter = require("./workouts.routes");
const exercisesRouter = require( "./exercises.routes")
const authRouter= require("./auth.routes")
/* GET home page */

router.use("/workouts", workoutsRouter);
router.use("/exercises", exercisesRouter);
router.use("/auth", authRouter);

module.exports = router;
