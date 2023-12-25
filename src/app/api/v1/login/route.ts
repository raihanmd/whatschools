import { NextRequest } from "next/server";

import usersService from "@/services/users.service";
import ErrorHandler from "@/utils/handler/errorHandler";
import SuccessResponse from "@/utils/responses/successResponse";

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
