export type FormStepperProps = {
  activeStep: number;
  step: Array<Step>;
};

export type Step = {
  label: string;
};

type InputField = {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  options?: Array<string>;
  description?: string;
  withAddon?: boolean;
  addOn?: string;
};

export type InputFields = InputField & {
  isMerged?: boolean;
  fields?: Array<InputField>;
};
