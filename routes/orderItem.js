const router = require("express").Router();
const orderItem = require("../controllers/orderItem.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, orderItem.create);
//get all
router.get("/getAll", auth, orderItem.getAll);
//get one
router.post("/getbyId", auth, orderItem.getbyId);
// delete one
router.post("/delete", auth, orderItem.delete);
// update one
router.post("/update", auth, orderItem.update);

module.exports = router;
