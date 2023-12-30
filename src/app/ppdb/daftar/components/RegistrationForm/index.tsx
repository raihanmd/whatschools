"use client";

// @ts-ignore
import { useSteps } from "chakra-ui-steps";
import { Button, Input, Stack } from "@chakra-ui/react";

import type { Step } from "./types";
import FormStepper from "./FormStepper";
import color from "@/config/color";
import InputForm from "./InputForm";
import ConfirmationForm from "./ConfirmationForm";

export default function RegistrationForm() {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Stack p={"3"} bg={color.light.foreground}>
      <FormStepper activeStep={activeStep} step={STEPS} />
      {activeStep === 0 ? <InputForm /> : <ConfirmationForm />}
      <Button isDisabled={activeStep === 0} onClick={() => prevStep()}>
        Prev
      </Button>
      <Button isDisabled={activeStep === 2} onClick={() => nextStep()}>
        Next
      </Button>
    </Stack>
  );
}

const STEPS: Array<Step> = [
  {
    label: "Isi Biodata",
    description: "Lengkapi Biodata",
  },
  {
    label: "Konfirmasi Data",
    description: "Pastikan Data Benar",
  },
];
