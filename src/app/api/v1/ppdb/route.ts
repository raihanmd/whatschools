import { NextRequest } from 'next/server';

import ErrorHandler from '@/utils/handler/errorHandler';
import SuccessResponse from '@/utils/responses/successResponse';


export async function POST(req: NextRequest) {
    try {
      return SuccessResponse({
        statusCode: 200,
        payload: "Test",
        message: "Login success",
      });
    } catch (err: any) {
      return ErrorHandler(err);
    }
  }
  