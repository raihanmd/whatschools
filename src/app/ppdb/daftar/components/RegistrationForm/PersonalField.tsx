"use client";

import { Stack } from "@chakra-ui/react";

import { InputFields } from "./types";
import generateFormControl from "@/utils/generateFormControl";

const INPUT_FIELDS: Array<InputFields> = [
  {
    label: "Nama Lengkap",
    type: "text",
    placeholder: "Nama lengkap anda",
    name: "name",
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
        placeholder: "Tempat lahir anda",
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

export default function PersonalField() {
  return (
    <Stack as="form">
      {INPUT_FIELDS.map((input, i) =>
        input.isMerged ? (
          <Stack key={i} direction={{ base: "column", md: "row" }}>
            {input?.fields?.map((subInput) => generateFormControl(subInput))}
          </Stack>
        ) : (
          generateFormControl(input)
        )
      )}
    </Stack>
  );
}
