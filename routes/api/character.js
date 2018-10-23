const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/")
  .get(controller.findAllCharacter)
  .post(controller.createCharacter);

router.route("/:id")
  //.get(controller.findByIdRecipe)
//  .delete(controller.removeRecipe)

//router.put("/:id/:incrementOrDecrement", controller.updateRecipeLikeCount)

module.exports = router;
