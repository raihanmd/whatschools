import type { FormElement } from "./types";
import FormFieldContainer from "./FormField/FormFieldContainer";

const INPUT_FIELDS: Array<FormElement> = [
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
];

export default function SchoolField() {
  return <FormFieldContainer inputFields={INPUT_FIELDS} />;
}
