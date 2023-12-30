"use client";

// @ts-ignore
import { Steps, Step } from "chakra-ui-steps";
import { Stack } from "@chakra-ui/react";

import type { FormStepperProps } from "./types";

export default function FormStepper({ activeStep, step }: FormStepperProps) {
  return (
    <Stack w={"full"} mx={"auto"}>
      <Steps
        activeStep={activeStep}
        variant={"circles-alt"}
        orientation={"horizontal"}
        responsive={false}
      >
        {step.map((step) => (
          <Step key={step.label} label={step.label} gap={"5"} />
        ))}
      </Steps>
    </Stack>
  );
}
