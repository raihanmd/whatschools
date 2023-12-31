export default class ResponseError extends Error {
  statusCode: number;
  error: any;
  constructor(statusCode: number, error: any) {
    super(error);
    this.statusCode = statusCode;
    this.error = error;
  }
}
