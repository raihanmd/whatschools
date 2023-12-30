"use client";

// @ts-ignore
import { useSteps } from "chakra-ui-steps";
import { Button, Flex, Stack } from "@chakra-ui/react";

import type { Step } from "./types";
import FormStepper from "./FormField/FormStepper";
import color from "@/config/color";
import PersonalField from "./PersonalField";
import SchoolField from "./SchoolField";
import ConfirmationForm from "./ConfirmationForm";

export default function RegistrationForm() {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  let stepComponent;

  switch (activeStep) {
    case 0:
      stepComponent = <PersonalField />;
      break;
    case 1:
      stepComponent = <SchoolField />;
      break;
    case 2:
      stepComponent = <ConfirmationForm />;
      break;
    default:
      stepComponent = null;
  }

  return (
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
      {stepComponent}
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
          isDisabled={activeStep === STEPS.length}
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
    label: "Isi Biodata Diri",
  },
  {
    label: "Sekolah Sebelumnya",
  },
  {
    label: "Konfirmasi Data",
  },
];
