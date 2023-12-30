"use client";

// @ts-ignore
import { useSteps } from "chakra-ui-steps";
import { Button, Flex, Stack } from "@chakra-ui/react";

import type { Step } from "./types";
import FormStepper from "./FormStepper";
import color from "@/config/color";
import InputField from "./InputField";
import ConfirmationForm from "./ConfirmationForm";

export default function RegistrationForm() {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Stack p={"5"} bg={color.light.foreground}>
      <FormStepper activeStep={activeStep} step={STEPS} />
      {activeStep === 0 ? <InputField /> : <ConfirmationForm />}
      <Flex justify={"end"} align={"center"} gap={"3"}>
        <Button
          isDisabled={activeStep === 0}
          bg={color.utility.error.background}
          color={color.utility.error.content}
          _hover={{ bg: color.utility.error.background }}
          onClick={() => prevStep()}
        >
          Prev
        </Button>
        <Button
          isDisabled={activeStep === 2}
          bg={color.utility.success.background}
          color={color.utility.success.content}
          _hover={{ bg: color.utility.success.background }}
          onClick={() => nextStep()}
        >
          Next
        </Button>
      </Flex>
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
