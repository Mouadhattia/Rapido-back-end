const menu = require("../services/menu.service");
const createError = require("http-errors");

class menuController {
  static create = async (req, res, next) => {
    try {
      const supp = await menu.create(req.body);
      res.status(200).json({
        status: true,
        message: "menu created ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const supp = await menu.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of menu ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const supp = await menu.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "menu detail ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const supp = await menu.delete(req.body);
      res.status(200).json({
        status: true,
        message: "menu deleted",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const supp = await menu.update(req.body);
      res.status(200).json({
        status: true,
        message: "menu updated",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = menuController;
