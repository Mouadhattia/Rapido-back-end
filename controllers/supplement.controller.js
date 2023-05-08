const supplment = require("../services/supplment.service");
const createError = require("http-errors");

class supplmentController {
  static create = async (req, res, next) => {
    try {
      const data = await supplment.create(req.body);
      res.status(200).json({
        status: true,
        message: "supplment created ",
        data: data,
      });
    } catch (e) {
      console.log(e.statusCode, e.message);
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await supplment.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of supplment ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      console.log(e.statusCode, e.message);
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await supplment.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "supplment detail ",
        data: data ? data : "there is no supplment with this id ",
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await supplment.delete(req.body);
      res.status(200).json({
        status: true,
        message: "supplment deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await supplment.update(req.body);
      res.status(200).json({
        status: true,
        message: "supplment updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = supplmentController;
