class BaseError extends Error {
  constructor(name, statusCode, description, message) {
    super();
    this.name = name;
    this.statusCode = statusCode;
    this.description = description;
    this.message = message;
  }
}

export default BaseError;
