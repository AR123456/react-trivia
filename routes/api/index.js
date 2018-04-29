const router = require("express").Router();
const quizRoutes = require("./quizes");

// quiz routes
router.use("/quizes", quizRoutes);

module.exports = router;
