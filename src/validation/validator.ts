import ResponseError from "@/errors/responseError";
import { AnySchema } from "yup";

export default async function validator(schema: AnySchema, data: any) {
  try {
    return await schema.validate(data, { strict: true, abortEarly: false });
  } catch (error: any) {
    throw new ResponseError(400, error.errors);
  }
}
