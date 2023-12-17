import { NextResponse } from "next/server";

interface IErrorResponse {
  statusCode: number;
  error: any;
}

const ErrorResponse = ({ statusCode, error }: IErrorResponse) => {
  return NextResponse.json(
    {
      statusCode,
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
