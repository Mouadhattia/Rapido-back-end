const router = require("express").Router();
const favorite = require("../controllers/favorite.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", favorite.create);
//get all
router.post("/getAll", favorite.getAll);
//get one
router.post("/getbyId", favorite.getbyId);
// delete one
router.post("/delete", favorite.delete);
// update one
router.post("/update", favorite.update);

module.exports = router;
