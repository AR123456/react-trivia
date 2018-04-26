const router = require("express").Router();
const bookRoutes = require("./quizes");

// quiz routes
router.use("/quizes", bookRoutes);

module.exports = router;
