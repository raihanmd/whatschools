export type FormStepperProps = {
  activeStep: number;
  step: Array<Step>;
};

export type Step = {
  label: string;
  description: string;
};
