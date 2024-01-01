import { daftarSchema } from "@/validation/ppdb.schema";
import { UseFormRegister } from "react-hook-form";
import { InferType } from "yup";

export type Step = {
  label: string;
  reactHookForm: Array<string>;
  fields: Array<FormElement>;
};

export type FormField = {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  options?: Array<string>;
  description?: string;
  withAddon?: boolean;
  addOn?: string;
};

export type FormElement = FormField & {
  isMerged?: boolean;
  fields?: Array<FormField>;
};

export type FieldProps = {
  fields: Array<FormElement>;
};

export type Inputs = InferType<typeof daftarSchema>;

export type FieldName = keyof Inputs;
