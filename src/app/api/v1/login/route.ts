import { NextRequest } from "next/server";

import SuccessResponse from "@/app/utils/responses/successResponse";
import usersService from "@/services/usersService";
import ErrorHandler from "@/app/utils/handler/errorHandler";

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();

    const result = await usersService.login(request);

    return SuccessResponse({
      statusCode: 200,
      payload: result,
      message: "Login success",
    });
  } catch (err: any) {
    return ErrorHandler(err);
  }
}
