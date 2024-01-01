import Agama from "@/enums/ppdb/Agama";
import JenisKelamin from "@/enums/ppdb/JenisKelamin";
import JenisPendaftaran from "@/enums/ppdb/JenisPendaftaran";
import UnitPendidikan from "@/enums/ppdb/UnitPendidikan";

export type DaftarSchema = {
  nama_lengkap: string;
  jenis_kelamin: JenisKelamin;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama: Agama;
  no_hp: number;
  unit_pendidikan: UnitPendidikan;
  jenis_pendaftaran: JenisPendaftaran;
  asal_sekolah: string;
  password: string;
};
