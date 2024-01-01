import ErrorResponse from "../responses/errorResponse";

export default function ErrorHandler(err: any) {
  return ErrorResponse({
    statusCode: err.statusCode || 500,
    error: err.issues || err.message || "Internal server error",
  });
}
