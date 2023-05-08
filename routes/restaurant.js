const router = require("express").Router();
const restaurant = require("../controllers/restaurant.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create",  restaurant.create);
//get all
router.post("/getAll",  restaurant.getAll);
//get one
router.post("/getbyId",  restaurant.getbyId);
// delete one
router.post("/delete",  restaurant.delete);
// update one
router.post("/update",  restaurant.update);

module.exports = router;
