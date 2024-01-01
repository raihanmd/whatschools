import type { FieldProps } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";

export default function SchoolField({ fields }: FieldProps) {
  return <FormFieldContainer inputFields={fields} />;
}
