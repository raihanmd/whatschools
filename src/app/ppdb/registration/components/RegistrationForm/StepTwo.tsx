import type { FieldProps } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";

export default function StepTwo({ fields }: FieldProps) {
  return <FormFieldContainer inputFields={fields} />;
}
