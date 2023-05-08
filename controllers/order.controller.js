const order = require("../services/order.service");
const createError = require("http-errors");

class orderController {
  static create = async (req, res, next) => {
    try {
      const data = await order.create(req.body);
      res.status(200).json({
        status: true,
        message: "order created ",
        data: data,
      });
    } catch (e) {
      console.log(e.statusCode, e.message);
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await order.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of order ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await order.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "order detail ",
        data: data ? data : "there is no order with this id ",
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await order.delete(req.body);
      res.status(200).json({
        status: true,
        message: "order deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await order.update(req.body);
      res.status(200).json({
        status: true,
        message: "order updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = orderController;
