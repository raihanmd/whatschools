import { ZodError } from "zod";
import ErrorResponse from "../responses/errorResponse";

export default function ErrorHandler(err: any) {
  return ErrorResponse({
    statusCode: err instanceof ZodError ? 403 : err.statusCode || 500,
    error: err.issues || err.message || "Internal server error",
  });
}
