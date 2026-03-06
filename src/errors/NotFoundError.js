import BaseError from "./BaseError.js";
import { StatusCodes } from "http-status-codes";
class NotFoundError extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "NotFound",
      StatusCodes.NOT_FOUND,
      `The requested resource: ${resourceName} with value ${resourceValue} not found`,
      "Requested resource not found",
    );
  }
}
export default NotFoundError;
