import { ZodBoolean, ZodNumber, ZodObject, ZodOptional, ZodString } from "zod";

export type GetRequiredType<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : never;

export type GetType<T> = undefined extends T
  ? `${GetRequiredType<T>}Optional`
  : GetRequiredType<T>;

export type ToZodRawObject<Output extends object> = {
  [Key in keyof Output]: ZodTypes[GetType<Output[Key]>];
};

export type ToZodObject<Output extends object> = ZodObject<
  Record<string, any>,
  "strict",
  any,
  Output
>;

export interface ZodTypes {
  string: ZodString;
  stringOptional: ZodOptional<ZodString>;
  number: ZodNumber;
  numberOptional: ZodOptional<ZodNumber>;
  boolean: ZodBoolean;
  booleanOptional: ZodOptional<ZodBoolean>;
}
