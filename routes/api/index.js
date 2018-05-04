const router = require("express").Router();
const quizRoutes = require("./quizes");

// quiz routes
router.use("/quizzes", quizRoutes);

module.exports = router;
