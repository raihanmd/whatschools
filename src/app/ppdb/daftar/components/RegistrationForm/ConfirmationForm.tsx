import type { FieldProps, FormElement } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";
import { Button, Stack } from "@chakra-ui/react";

const INPUT_FIELDS: Array<FormElement> = [
  {
    isMerged: true,
    fields: [
      {
        label: "Kata Sandi Akun",
        type: "password",
        name: "kataSandi",
        placeholder: "Kata Sandi Akun",
      },
      {
        label: "Konfirmasi Kata Sandi",
        type: "password",
        name: "konfirmasiKataSandi",
        placeholder: "Tulis Ulang Kata Sandi Akun",
      },
    ],
  },
];

export default function ConfirmationForm({ activeStep }: FieldProps) {
  return (
    <Stack display={activeStep === 2 ? "block" : "none"}>
      <FormFieldContainer inputFields={INPUT_FIELDS} />;
      <Button type="submit">Test</Button>
    </Stack>
  );
}
