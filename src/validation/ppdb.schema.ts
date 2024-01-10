import * as yup from "yup";

import JenisKelamin from "@/enums/ppdb/JenisKelamin";
import Agama from "@/enums/ppdb/Agama";
import UnitPendidikan from "@/enums/ppdb/UnitPendidikan";
import JenisPendaftaran from "@/enums/ppdb/JenisPendaftaran";

export const registrationSchema = yup.object({
  nama_lengkap: yup
    .string()
    .min(3, "Nama minimal 3 huruf")
    .max(255, "Name maksimal 255 huruf")
    .required("Nama tidak boleh kosong"),
  jenis_kelamin: yup
    .mixed<JenisKelamin>()
    .oneOf(Object.values(JenisKelamin), "Jenis Kelamin tidak valid")
    .required("Jenis Kelamin tidak boleh kosong"),
  tempat_lahir: yup.string().required("Tempat Lahir tidak boleh kosong"),
  tanggal_lahir: yup.string().required("Tanggal Lahir tidak boleh kosong"),
  agama: yup
    .mixed<Agama>()
    .oneOf(Object.values(Agama), "Agama tidak valid")
    .required("Agama tidak boleh kosong"),
  no_hp: yup
    .string()
    .typeError("No. HP tidak boleh kosong")
    .test(
      "startsWithEight",
      "No. HP harus diawali dengan 62 Contoh 628123xxx",
      function (value) {
        if (!value) return true;

        return value.toString().startsWith("62");
      }
    )
    .matches(/^628\d{8,14}$/, "No. HP tidak valid")
    .required("No. HP tidak boleh kosong"),
  unit_pendidikan: yup
    .mixed<UnitPendidikan>()
    .oneOf(Object.values(UnitPendidikan), "Unit Pendidikan tidak valid")
    .required("Unit Pendidikan tidak boleh kosong"),
  jenis_pendaftaran: yup
    .mixed<JenisPendaftaran>()
    .oneOf(Object.values(JenisPendaftaran), "Jenis Pendaftaran tidak valid")
    .required("Jenis Pendaftaran tidak boleh kosong"),
  asal_sekolah: yup.string().required("Asal Sekolah tidak boleh kosong"),
  password: yup
    .string()
    .min(8, "Password minimal 8 karakter")
    .matches(/^(?=.*[a-z])/, "Password harus mengandung huruf kecil")
    .matches(/^(?=.*[A-Z])/, "Password harus mengandung huruf kapital")
    .matches(/^(?=.*[0-9])/, "Password harus mengandung angka")
    .required("Password tidak boleh kosong"),
  password_confirm: yup
    .string()
    .min(8, "Password minimal 8 karakter")
    .matches(/^(?=.*[a-z])/, "Password harus mengandung huruf kecil")
    .matches(/^(?=.*[A-Z])/, "Password harus mengandung huruf kapital")
    .matches(/^(?=.*[0-9])/, "Password harus mengandung angka")
    .oneOf([yup.ref("password")], "Password harus sama")
    .required(),
});
