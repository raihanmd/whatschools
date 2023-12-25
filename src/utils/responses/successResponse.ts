import { NextResponse } from "next/server";

interface ISuccessResponse {
  statusCode: number;
  payload: any;
  message: string | any;
}

const SuccessResponse = ({
  statusCode,
  payload,
  message,
}: ISuccessResponse) => {
  return NextResponse.json(
    {
      status_code: statusCode,
      payload,
      message,
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

export default SuccessResponse;
