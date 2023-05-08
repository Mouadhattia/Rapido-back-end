const router = require("express").Router();
const comment = require("../controllers/comment.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", comment.create);
//get all
router.post("/getAll", comment.getAll);
//get one
router.post("/getbyId", comment.getbyId);
// delete one
router.post("/delete", comment.delete);
// update one
router.post("/update", comment.update);

module.exports = router;
