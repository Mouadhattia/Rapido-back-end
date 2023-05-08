const category = require("../services/category.service");
const createError = require("http-errors");

class categoryController {
  static create = async (req, res, next) => {
    try {
      const supp = await category.create(req.body);
      res.status(200).json({
        status: true,
        message: "category created ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const supp = await category.getAll();
      res.status(200).json({
        status: true,
        message: "List of category ",
        data:supp
        
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const supp = await category.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "category detail ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const supp = await category.delete(req.body);
      res.status(200).json({
        status: true,
        message: "category deleted",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const supp = await category.update(req.body);
      res.status(200).json({
        status: true,
        message: "category updated",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = categoryController;
