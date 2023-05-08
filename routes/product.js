const router = require("express").Router();
const product = require("../controllers/product.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", product.create);
//get all
router.post("/getAll", product.getAll);
//get one
router.post("/getbyId", product.getbyId);
// delete one
router.post("/delete", product.delete);
// update one
router.post("/update", product.update);

module.exports = router;
