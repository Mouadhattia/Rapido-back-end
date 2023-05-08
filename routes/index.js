const express = require("express");
const router = express.Router();
const auth = require("./auth");
const product = require("./product");
const user = require("./user");
const category = require("./category");
const promo = require("./promo");
const favorite = require("./favorite");
const service = require("./service");
const menu = require("./menu");
const restaurant = require("./restaurant");
const orderItem = require("./orderItem");
const order = require("./order");
const supplement = require("./supplement");

const notification = require("./notification");
const comment = require("./comment");

const createError = require("http-errors");

router.get("/", (req, res) => {
  res.send("Hello rapido!");
});

router.use("/auth", auth);
router.use("/product", product);
router.use("/user", user);
router.use("/category", category);
router.use("/promo", promo);
router.use("/favorite", favorite);
router.use("/service", service);
router.use("/menu", menu);
router.use("/restaurant", restaurant);
router.use("/orderItem", orderItem);
router.use("/order", order);
router.use("/notification", notification);
router.use("/comment", comment);
router.use("/supplement", supplement);
router.use(async (req, res, next) => {
  next(createError.NotFound("Route not Found"));
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: false,
    message: err.message,
  });
});

module.exports = router;
