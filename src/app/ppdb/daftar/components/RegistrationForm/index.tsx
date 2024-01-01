"use client";

// @ts-ignore
import { useSteps } from "chakra-ui-steps";
import { useEffect } from "react";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { FieldName, Inputs, Step } from "./types";
import FormStepper from "./FormField/FormStepper";
import color from "@/config/color";
import PersonalField from "./PersonalField";
import SchoolField from "./SchoolField";
import ConfirmationForm from "./ConfirmationForm";
import { daftarSchema } from "@/validation/ppdb.schema";
import { RegisterProvider } from "../../contexts/RegisterProvider";

export default function RegistrationForm() {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  const {
    handleSubmit,
    register,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(daftarSchema) });

  const next = async () => {
    const fields = STEPS[activeStep].reactHookForm;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    console.log(output);

    if (!output) return;

    if (activeStep < STEPS.length - 1) {
      if (activeStep === 2) {
        await handleSubmit(processForm)();
      }
      nextStep();
    }
  };

  const prev = () => {
    if (activeStep > 0) {
      prevStep();
    }
  };

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  let stepComponent;

  switch (activeStep) {
    case 0:
      stepComponent = <PersonalField fields={STEPS[0].fields} />;
      break;
    case 1:
      stepComponent = <SchoolField fields={STEPS[1].fields} />;
      break;
    case 2:
      stepComponent = <ConfirmationForm fields={STEPS[2].fields} />;
      break;
    default:
      stepComponent = null;
  }

  return (
    <RegisterProvider register={register} errors={errors}>
      <Stack
        p={"5"}
        bg={color.light.foreground}
        maxW={"7xl"}
        minW={{ base: "full", md: "3xl" }}
        mx={"auto"}
        gap={"5"}
        rounded={"xl"}
      >
        <FormStepper activeStep={activeStep} step={STEPS} />
        <form onSubmit={handleSubmit(processForm)}>{stepComponent}</form>
        <Flex justify={"end"} align={"center"} gap={"3"}>
          <Button
            isDisabled={activeStep === 0}
            bg={color.utility.error.background}
            color={color.utility.error.content}
            _hover={{ bg: color.utility.error.background }}
            onClick={() => prev()}
          >
            Kembali
          </Button>
          <Button
            isDisabled={activeStep === STEPS.length}
            bg={color.utility.success.background}
            color={color.utility.success.content}
            _hover={{ bg: color.utility.success.background }}
            onClick={() => next()}
          >
            Lanjut
          </Button>
        </Flex>
      </Stack>
    </RegisterProvider>
  );
}

const STEPS: Array<Step> = [
  {
    label: "Isi Biodata Diri",
    reactHookForm: [
      "nama_lengkap",
      "jenis_kelamin",
      "tempat_lahir",
      "tanggal_lahir",
      "agama",
      "no_hp",
    ],
    fields: [
      {
        label: "Nama Lengkap",
        type: "text",
        placeholder: "Nama Lengkap Anda",
        name: "nama_lengkap",
      },
      {
        isMerged: true,
        fields: [
          {
            label: "Jenis Kelamin",
            type: "select",
            name: "jenis_kelamin",
            placeholder: "Pilih Jenis Kelamin",
            options: ["Laki-laki", "Perempuan"],
          },
          {
            label: "Tempat Lahir",
            type: "text",
            placeholder: "Tempat Lahir Anda",
            name: "tempat_lahir",
          },
          {
            label: "Tanggal Lahir",
            type: "date",
            name: "tanggal_lahir",
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
            options: [
              "Islam",
              "Protestan",
              "Katolik",
              "Hindu",
              "Budha",
              "Konghucu",
            ],
          },
          {
            label: "Nomor Telepon / Whatsapp",
            type: "number",
            name: "no_hp",
            placeholder: "Contoh: 89606xxxxxx",
            description:
              "Pastikan nomor telepon / Whatsapp yang didaftarkan aktif dan dapat dihubungi",
            withAddon: true,
            addOn: "+62",
          },
        ],
      },
    ],
  },
  {
    label: "Sekolah Sebelumnya",
    reactHookForm: ["unit_pendidikan", "jenis_pendaftaran", "asal_sekolah"],
    fields: [
      {
        label: "Unit Pendidikan Sebelumnya",
        type: "select",
        name: "unit_pendidikan",
        placeholder: "Pilih Unit Pendidikan Sebelumnya",
        options: ["SD", "MI", "MTS", "SMP"],
      },
      {
        label: "Jenis Pendaftaran",
        type: "select",
        name: "jenis_pendaftaran",
        placeholder: "Pilih Jenis Pendaftaran",
        options: ["Daftar Baru", "Siswa Pindahan"],
      },
      {
        label: "Asal Sekolah",
        type: "text",
        name: "asal_sekolah",
        placeholder: "Mts Negeri 1 Jakarta",
      },
    ],
  },
  {
    label: "Konfirmasi Data",
    reactHookForm: ["password"],
    fields: [
      {
        isMerged: true,
        fields: [
          {
            label: "Kata Sandi Akun",
            type: "password",
            name: "password",
            placeholder: "Kata Sandi Akun",
          },
          {
            label: "Konfirmasi Kata Sandi",
            type: "password",
            name: "password_confirm",
            placeholder: "Tulis Ulang Kata Sandi Akun",
          },
        ],
      },
    ],
  },
];
