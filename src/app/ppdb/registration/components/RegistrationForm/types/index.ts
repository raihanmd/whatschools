import { RegistrationSchema } from "@/types/ppdb.type";
import { registrationSchema } from "@/validation/ppdb.schema";
import { IconType } from "react-icons";
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
  addOnIcon?: IconType;
};

export type FormElement = FormField & {
  isMerged?: boolean;
  fields?: Array<FormField>;
};

export type FieldProps = {
  fields: Array<FormElement>;
};

export type Inputs = InferType<typeof registrationSchema>;

export type FieldName = keyof RegistrationSchema;
