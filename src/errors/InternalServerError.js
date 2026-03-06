import BaseError from "./BaseError.js";
import { StatusCodes } from "http-status-codes";

class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong !!`,
      "Error while processing your request",
    );
  }
}
export default InternalServerError;
