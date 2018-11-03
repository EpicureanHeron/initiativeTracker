const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/")
  .get(controller.findAllCharacter)
  .post(controller.createCharacter);

router.route("/:id")
  .put(controller.updateCharacter)
  //.get(controller.findByIdRecipe)
//  .delete(controller.removeRecipe)


module.exports = router;
