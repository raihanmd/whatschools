import type { FieldProps } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";

export default function StepOne({ fields }: FieldProps) {
  return <FormFieldContainer inputFields={fields} />;
}
