const router = require("express").Router();
const characterRoutes = require("./character");
const battleRoutes = require("./battle");

// Book routes
router.use("/character", characterRoutes);
router.use("/battle", battleRoutes)

module.exports = router;
