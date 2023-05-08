const notification = require("../services/notification.service");
const createError = require("http-errors");

class notificationController {
  static create = async (req, res, next) => {
    try {
      const data = await notification.create(req.body);
      res.status(200).json({
        status: true,
        message: "notification created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await notification.getAll();
      res.status(200).json({
        status: true,
        message: "List of notification ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await notification.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "notification detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await notification.delete(req.body);
      res.status(200).json({
        status: true,
        message: "notification deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await notification.update(req.body);
      res.status(200).json({
        status: true,
        message: "notification updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = notificationController;
