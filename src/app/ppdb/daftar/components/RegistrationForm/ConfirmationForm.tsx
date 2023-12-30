import type { FormElement } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";

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

export default function ConfirmationForm() {
  return <FormFieldContainer inputFields={INPUT_FIELDS} />;
}
