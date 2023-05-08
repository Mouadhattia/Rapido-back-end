const product = require("../services/product.service");
const createError = require("http-errors");

class productController {
  static create = async (req, res, next) => {
    try {
      const prod = await product.create(req.body);
      res.status(200).json({
        status: true,
        message: "Product created ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const prod = await product.getAll(req.body);
      res.status(200).json({
        status: true,
        message: "List of product ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const prod = await product.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "Product detail ",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const prod = await product.delete(req.body);
      res.status(200).json({
        status: true,
        message: "Product deleted",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static update = async (req, res, next) => {
    try {
      const prod = await product.update(req.body);
      res.status(200).json({
        status: true,
        message: "Product updated",
        data: prod,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = productController;
