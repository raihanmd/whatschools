"use client";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";

import { InputFields } from "./types";

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
        options: ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu"],
      },
      {
        label: "Nomor Telepon / Whatsapp",
        type: "text",
        name: "noTelepon",
        placeholder: "62xxxxxxxx",
        description:
          "Pastikan nomor telepon / Whatsapp yang didaftarkan aktif dan dapat dihubungi",
      },
    ],
  },
  {
    isMerged: true,
    fields: [
      {
        label: "Unit Pendidikan Sebelumnya",
        type: "select",
        name: "unitPendidikanSebelumnya",
        options: ["SD", "MI", "MTS", "SMP"],
      },
      {
        label: "Jenis Pendaftaran",
        type: "select",
        name: "jenisPendaftaran",
        options: ["Daftar Baru", "Siswa Pindahan"],
      },
      {
        label: "Nama Sekolah Asal",
        type: "text",
        name: "sekolahAsal",
        placeholder: "Mts Negeri 1",
      },
    ],
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

const generateFormControl = (input: InputFields) => {
  switch (input.type) {
    case "password":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <Input
            type="password"
            placeholder={input.placeholder}
            name={input.name}
          />
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    case "text":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <Input
            type="text"
            placeholder={input.placeholder}
            name={input.name}
          />
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    case "date":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <Input type="date" name={input.name} />
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    case "select":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <Select name={input.name}>
            {input.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    default:
      return null;
  }
};

export default function InputField() {
  return (
    <Stack as="form">
      {INPUT_FIELDS.map((input) =>
        input.isMerged ? (
          <Stack key={input.label} direction={{ base: "column", md: "row" }}>
            {input?.fields?.map((subInput) => generateFormControl(subInput))}
          </Stack>
        ) : (
          generateFormControl(input)
        )
      )}
    </Stack>
  );
}
