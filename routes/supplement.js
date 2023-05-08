const router = require("express").Router();
const supplement = require("../controllers/supplement.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", supplement.create);
//get all
router.post("/getAll", supplement.getAll);
//get one
router.post("/getbyId", supplement.getbyId);
// delete one
router.post("/delete", supplement.delete);
// update one
router.post("/update", supplement.update);

module.exports = router;
