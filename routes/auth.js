const router = require("express").Router();
const user = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

// register
router.post("/register", user.register);

// login
router.post("/login", user.login);

//current
router.get("/current", auth, user.current);

module.exports = router;
