const { HTTP_CODE } = require("./constants");

class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ message: error.message });
};

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

module.exports = { CustomError, errorHandler, asyncWrapper };
