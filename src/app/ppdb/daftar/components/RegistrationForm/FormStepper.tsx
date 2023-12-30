"use client";

// @ts-ignore
import { Steps, Step } from "chakra-ui-steps";
import { Stack } from "@chakra-ui/react";

import { FormStepperProps } from "./types";

export default function FormStepper({ activeStep, step }: FormStepperProps) {
  return (
    <Stack w={{ base: "sm", md: "xl" }} mx={"auto"}>
      <Steps activeStep={activeStep}>
        {step.map((step) => (
          <Step
            key={step.label}
            label={step.label}
            description={step.description}
          />
        ))}
      </Steps>
    </Stack>
  );
}
