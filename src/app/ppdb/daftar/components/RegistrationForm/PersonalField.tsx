import type { FieldProps, FormElement } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";
import { Stack } from "@chakra-ui/react";

const INPUT_FIELDS: Array<FormElement> = [
  {
    label: "Nama Lengkap",
    type: "text",
    placeholder: "Nama Lengkap Anda",
    name: "nama",
  },
  {
    isMerged: true,
    fields: [
      {
        label: "Jenis Kelamin",
        type: "select",
        name: "jenisKelamin",
        placeholder: "Pilih Jenis Kelamin",
        options: ["Laki-laki", "Perempuan"],
      },
      {
        label: "Tempat Lahir",
        type: "text",
        placeholder: "Tempat Lahir Anda",
        name: "tempatLahir",
      },
      {
        label: "Tanggal Lahir",
        type: "date",
        name: "tanggalLahir",
      },
    ],
  },
  {
    isMerged: true,
    fields: [
      {
        label: "Agama",
        type: "select",
        name: "agama",
        placeholder: "Pilih Agama",
        options: ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu"],
      },
      {
        label: "Nomor Telepon / Whatsapp",
        type: "number",
        name: "noTelepon",
        placeholder: "Contoh: 89606xxxxxx",
        description:
          "Pastikan nomor telepon / Whatsapp yang didaftarkan aktif dan dapat dihubungi",
        withAddon: true,
        addOn: "+62",
      },
    ],
  },
];

export default function PersonalField({ activeStep }: FieldProps) {
  return (
    <Stack display={activeStep === 0 ? "block" : "none"}>
      <FormFieldContainer inputFields={INPUT_FIELDS} />;
    </Stack>
  );
}
