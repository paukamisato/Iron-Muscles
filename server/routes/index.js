const router = require("express").Router();
const workoutsRouter = require("./workouts.routes");
const exercisesRouter = require("./exercises.routes");
const authRouter = require("./auth.routes");
const uploadRouter = require("./file-upload.routes");
/* GET home page */

router.use("/workouts", workoutsRouter);
router.use("/exercises", exercisesRouter);
router.use("/auth", authRouter);
router.use("/upload", uploadRouter);

module.exports = router;
