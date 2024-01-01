import type { FieldProps } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";

export default function PersonalField({ fields }: FieldProps) {
  return <FormFieldContainer inputFields={fields} />;
}
