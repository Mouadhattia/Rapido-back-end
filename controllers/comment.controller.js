const comment = require("../services/comment.service");
const createError = require("http-errors");

class commentController {
  static create = async (req, res, next) => {
    try {
      const prod = await comment.create(req.body);
      res.status(200).json({
        status: true,
        message: "comment created ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const prod = await comment.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of comment ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const prod = await comment.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "comment detail ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const prod = await comment.delete(req.body);
      res.status(200).json({
        status: true,
        message: "comment deleted",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const prod = await comment.update(req.body);
      res.status(200).json({
        status: true,
        message: "comment updated",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = commentController;
