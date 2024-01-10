"use client";

// @ts-ignore
import { useSteps } from "chakra-ui-steps";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaWhatsapp } from "react-icons/fa";

import type { FieldName, Inputs, Step } from "./types";
import { registrationSchema } from "@/validation/ppdb.schema";
import { RegistrationProvider } from "../../contexts/RegistrationProvider";
import color from "@/config/color";
import FormStepper from "./FormField/FormStepper";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

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
  } = useForm<Inputs>({
    resolver: yupResolver(registrationSchema),
    mode: "onChange",
  });

  const next = async () => {
    const fields = STEPS[activeStep].reactHookForm;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (activeStep < STEPS.length) {
      if (activeStep === 2) {
        await handleSubmit(processForm)();
        return nextStep();
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
      stepComponent = <StepOne fields={STEPS[0].fields} />;
      break;
    case 1:
      stepComponent = <StepTwo fields={STEPS[1].fields} />;
      break;
    case 2:
      stepComponent = <StepThree fields={STEPS[2].fields} />;
      break;
    case 3:
      stepComponent = <StepFour />;
      break;
    default:
      stepComponent = null;
  }

  return (
    <RegistrationProvider register={register} errors={errors}>
      <Stack
        p={"5"}
        bg={color.light.foreground}
        maxW={"7xl"}
        minW={{ base: "full", md: "3xl" }}
        mx={"auto"}
        gap={"5"}
        rounded={"xl"}
        shadow={"lg"}
        zIndex={"10"}
      >
        <FormStepper activeStep={activeStep} step={STEPS} />
        <form onSubmit={handleSubmit(processForm)}>{stepComponent}</form>
        <Flex justify={"end"} align={"center"} gap={"3"}>
          <Button
            isDisabled={activeStep === 0}
            display={activeStep === STEPS.length ? "none" : "block"}
            bg={color.light.foreground}
            border={"1px"}
            borderColor={color.primary}
            color={color.primary}
            _hover={{
              bg: color.light.background,
              color: color.primaryDark,
              borderColor: color.primaryDark,
            }}
            onClick={() => prev()}
          >
            Kembali
          </Button>
          <Button
            isDisabled={activeStep === STEPS.length}
            display={activeStep === STEPS.length ? "none" : "block"}
            bg={color.primary}
            color={color.primaryContent}
            _hover={{ bg: color.primaryDark }}
            onClick={() => next()}
          >
            {activeStep === STEPS.length - 1 ? "Selesai" : "Lanjut"}
          </Button>
        </Flex>
      </Stack>
    </RegistrationProvider>
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
            placeholder: "Contoh: 6281234567890",
            description:
              "Pastikan nomor telepon / Whatsapp yang didaftarkan aktif dan dapat dihubungi",
            withAddon: true,
            addOnIcon: FaWhatsapp,
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
    reactHookForm: ["password", "password_confirm"],
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
