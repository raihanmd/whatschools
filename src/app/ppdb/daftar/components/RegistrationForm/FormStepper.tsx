"use client";

// @ts-ignore
import { Steps, Step } from "chakra-ui-steps";
import { Stack } from "@chakra-ui/react";

import { FormStepperProps } from "./types";

export default function FormStepper({ activeStep, step }: FormStepperProps) {
  return (
    <Stack w={"full"} mx={"auto"}>
      <Steps
        activeStep={activeStep}
        orientation="horizontal"
        responsive={true}
        variant={"circles-alt"}
        mobileBreakpoint={"sm"}
        expandVerticalSteps={false}
      >
        {step.map((step) => (
          <Step key={step.label} label={step.label} />
        ))}
      </Steps>
    </Stack>
  );
}
