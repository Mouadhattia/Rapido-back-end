const router = require("express").Router();
const notification = require("../controllers/notification.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create",notification.create);
//get all
router.post("/getAll",notification.getAll);
//get one
router.post("/getbyId",notification.getbyId);
// delete one
router.post("/delete", notification.delete);
// update one
router.post("/update", notification.update);

module.exports = router;
