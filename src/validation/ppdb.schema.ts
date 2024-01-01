import * as yup from "yup";

import JenisKelamin from "@/enums/ppdb/JenisKelamin";
import { DaftarSchema } from "@/types/ppdb.type";
import Agama from "@/enums/ppdb/Agama";
import UnitPendidikan from "@/enums/ppdb/UnitPendidikan";
import JenisPendaftaran from "@/enums/ppdb/JenisPendaftaran";

export const daftarSchema: yup.ObjectSchema<DaftarSchema> = yup.object({
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
    .number()
    .typeError("No. HP harus berupa angka")
    .integer("No. HP harus berupa angka")
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
    .min(8, "password minimal 8 karakter")
    .required("Password tidak boleh kosong"),
});
