const router = require("express").Router();
const quizRoutes = require("./quizes");

router.use("/quizzes", quizRoutes);

module.exports = router;
