export default class ResponseError extends Error {
  statusCode: number;
  constructor(statusCode: number, error: any) {
    super(error);
    this.statusCode = statusCode;
  }
}
