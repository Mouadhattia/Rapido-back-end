const router = require("express").Router();
const promo = require("../controllers/promo.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", promo.create);
//get all
router.post("/getAll", promo.getAll);
//get one
router.post("/getbyId", promo.getbyId);
// delete one
router.post("/delete", promo.delete);
// update one
router.post("/update", promo.update);

module.exports = router;
