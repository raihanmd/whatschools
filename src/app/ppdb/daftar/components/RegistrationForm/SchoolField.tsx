"use client";

import { Stack } from "@chakra-ui/react";

import { InputFields } from "./types";
import generateFormControl from "@/utils/generateFormControl";

const INPUT_FIELDS: Array<InputFields> = [
  {
    label: "Unit Pendidikan Sebelumnya",
    type: "select",
    name: "unitPendidikanSebelumnya",
    placeholder: "Pilih Unit Pendidikan Sebelumnya",
    options: ["SD", "MI", "MTS", "SMP"],
  },
  {
    label: "Jenis Pendaftaran",
    type: "select",
    name: "jenisPendaftaran",
    placeholder: "Pilih Jenis Pendaftaran",
    options: ["Daftar Baru", "Siswa Pindahan"],
  },
  {
    label: "Nama Sekolah Asal",
    type: "text",
    name: "sekolahAsal",
    placeholder: "Mts Negeri 1 Jakarta",
  },
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

export default function SchoolField() {
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
