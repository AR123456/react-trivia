const router = require("express").Router();
const quizesController = require("../../controllers/quizesController");
router
  .route("/")
  .get(quizesController.findAll)
  .post(quizesController.create);
router
  .route("/:id")
  .get(quizesController.findById)
  .put(quizesController.update)
  .delete(quizesController.remove);

module.exports = router;
