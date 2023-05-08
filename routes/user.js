const router = require("express").Router();
const user = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", user.create);
//get all
router.get("/getAll", user.getAll);
//get one
router.post("/getbyId", user.getbyId);
// delete one
router.post("/delete", user.delete);
// update one
router.post("/update", user.update);

module.exports = router;
