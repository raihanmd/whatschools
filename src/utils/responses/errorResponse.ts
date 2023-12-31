import ResponseError from "@/errors/responseError";
import { NextResponse } from "next/server";

const ErrorResponse = ({ statusCode, error }: ResponseError) => {
  return NextResponse.json(
    {
      status_code: statusCode,
      error,
    },
    {
      status: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
        "Content-Type": "application/json",
      },
    }
  );
};

export default ErrorResponse;
