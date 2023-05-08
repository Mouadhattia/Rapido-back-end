const restaurant = require("../services/restaurant.service");
const createError = require("http-errors");

class restaurantController {
  static create = async (req, res, next) => {
    try {
      const data = await restaurant.create(req.body);
      res.status(200).json({
        status: true,
        message: "restaurant created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await restaurant.getAll();
      res.status(200).json({
        status: true,
        message: "List of restaurant ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await restaurant.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "restaurant detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await restaurant.delete(req.body);
      res.status(200).json({
        status: true,
        message: "restaurant deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await restaurant.update(req.body);
      res.status(200).json({
        status: true,
        message: "restaurant updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = restaurantController;
