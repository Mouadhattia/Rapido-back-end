const router = require("express").Router();
const category = require("../controllers/category.controller");
const auth = require("../middlewares/auth");

//get all
router.post("/create", auth, category.create);
//get all
router.post("/getAll", auth, category.getAll);
//get one
router.post("/getbyId", category.getbyId);
// delete one
router.post("/delete", category.delete);
// update one
router.post("/update", category.update);

module.exports = router;
