const router = require("express").Router();
const authRouter = require("./auth.routes");
const exercisesRouter = require("./exercises.routes");
const routinesRouter = require("./routines.routes");
const uploadRouter = require("./file-upload.routes");
const workoutsRouter = require("./workouts.routes");
/* GET home page */

router.use("/auth", authRouter);
router.use("/exercises", exercisesRouter);
router.use("/routines", routinesRouter);
router.use("/upload", uploadRouter);
router.use("/workouts", workoutsRouter);

module.exports = router;
