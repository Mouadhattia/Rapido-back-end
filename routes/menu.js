const router = require("express").Router();
const menu = require("../controllers/menu.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", menu.create);
//get all
router.post("/getAll", menu.getAll);
//get one
router.post("/getbyId", menu.getbyId);
// delete one
router.post("/delete", menu.delete);
// update one
router.post("/update", menu.update);

module.exports = router;
