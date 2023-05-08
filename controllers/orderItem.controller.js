const orderItem = require("../services/orderItem.service");
const createError = require("http-errors");

class orderItemController {
  static create = async (req, res, next) => {
    try {
      const data = await orderItem.create(req.body);
      res.status(200).json({
        status: true,
        message: "orderItem created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await orderItem.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of orderItem ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await orderItem.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "orderItem detail ",
        data: data ? data : "there is no order with this id ",
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await orderItem.delete(req.body);
      res.status(200).json({
        status: true,
        message: "orderItem deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await orderItem.update(req.body);
      res.status(200).json({
        status: true,
        message: "orderItem updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = orderItemController;
