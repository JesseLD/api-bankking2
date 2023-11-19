class AppError extends Error {
  statusCode: Number;
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;

    // Object.setPrototypeOf(this, AppError.prototype);
  }
}

export default AppError;
