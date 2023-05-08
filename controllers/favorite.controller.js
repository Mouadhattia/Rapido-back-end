const favorite = require("../services/favorite.service");
const createError = require("http-errors");

class favoriteController {
  static create = async (req, res, next) => {
    try {
      const data = await favorite.create(req.body);
      res.status(200).json({
        status: true,
        message: "favorite created ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const data = await favorite.getAll(req.body);
    
      res.status(200).json({
        status: true,
        message: "List of favorite ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const data = await favorite.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "favorite detail ",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const data = await favorite.delete(req.body);
      res.status(200).json({
        status: true,
        message: "favorite deleted",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const data = await favorite.update(req.body);
      res.status(200).json({
        status: true,
        message: "favorite updated",
        data: data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = favoriteController;
