import type { FieldProps } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";

export default function ConfirmationForm({ fields }: FieldProps) {
  return <FormFieldContainer inputFields={fields} />;
}
