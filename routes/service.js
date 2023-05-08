const router = require("express").Router();
const service = require("../controllers/service.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", service.create);
//get all
router.post("/getAll", service.getAll);
//get one
router.post("/getbyId", service.getbyId);
// delete one
router.post("/delete", service.delete);
// update one
router.post("/update", service.update);

module.exports = router;
