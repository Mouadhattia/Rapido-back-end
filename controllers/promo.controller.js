const promo = require("../services/promo.service");
const createError = require("http-errors");

class promoController {
  static create = async (req, res, next) => {
    try {
      const supp = await promo.create(req.body);
      res.status(200).json({
        status: true,
        message: "promo created ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const supp = await promo.getAll();
      res.status(200).json({
        status: true,
        message: "List of promo ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const supp = await promo.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "promo detail ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const supp = await promo.delete(req.body);
      res.status(200).json({
        status: true,
        message: "promo deleted",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const supp = await promo.update(req.body);
      res.status(200).json({
        status: true,
        message: "promo updated",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = promoController;
