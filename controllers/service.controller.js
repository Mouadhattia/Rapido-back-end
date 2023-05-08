const service = require("../services/service.service");
const createError = require("http-errors");

class serviceController {
  static create = async (req, res, next) => {
    try {
      const data = await service.create(req.body);
      res.status(200).json({
        status: true,
        message: "service created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await service.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of service ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await service.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "service detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await service.delete(req.body);
      res.status(200).json({
        status: true,
        message: "service deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await service.update(req.body);
      res.status(200).json({
        status: true,
        message: "service updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = serviceController;
