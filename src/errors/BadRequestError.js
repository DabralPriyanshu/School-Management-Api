import BaseError from "./BaseError.js";
import { StatusCodes } from "http-status-codes";
class BadRequestError extends BaseError {
  constructor(propertyName) {
    super(
      "BadRequest",
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${propertyName} provided`,
      "Bad request please provide valid input",
    );
  }
}
export default BadRequestError;
