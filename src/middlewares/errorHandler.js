import BaseError from "../errors/BaseError.js";
import { StatusCodes } from "http-status-codes";
function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.description,
      data: {},
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong",
    error: "Error while processing your request",
    data: {},
  });
}
export default errorHandler;
