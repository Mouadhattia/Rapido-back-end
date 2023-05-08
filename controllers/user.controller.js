const user = require("../services/user.service");
const createError = require("http-errors");

class userController {
  static create = async (req, res, next) => {
    try {
      const supp = await user.create(req.body);
      res.status(200).json({
        status: true,
        message: "user created ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const supp = await user.getAll();
      res.status(200).json({
        status: true,
        message: "List of user ",
        data:supp
        
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static getbyId = async (req, res, next) => {
    try {
      const supp = await user.getbyId(req.body);
      res.status(200).json({
        status: true,
        message: "user detail ",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
  static delete = async (req, res, next) => {
    try {
      const supp = await user.delete(req.body);
      res.status(200).json({
        status: true,
        message: "user deleted",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
      
      
    }
  };
  static update = async (req, res, next) => {
    try {
      const supp = await user.update(req.body);
      res.status(200).json({
        status: true,
        message: "user updated",
        data: supp,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
     
      
    }
  };
}

module.exports = userController;
