const router = require("express").Router();
const order = require("../controllers/order.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", order.create);
//get all
router.post("/getAll", order.getAll);
//get one
router.post("/getbyId", order.getbyId);
// delete one
router.post("/delete", order.delete);
// update one
router.post("/update", order.update);

module.exports = router;
