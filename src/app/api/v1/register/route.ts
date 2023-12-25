import { NextRequest } from "next/server";

import usersService from "@/services/users.service";
import SuccessResponse from "@/utils/responses/successResponse";
import ErrorHandler from "@/utils/handler/errorHandler";

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();

    const result = await usersService.register(request);

    return SuccessResponse({
      statusCode: 200,
      payload: result,
      message: "Register success",
    });
  } catch (err: any) {
    return ErrorHandler(err);
  }
}
