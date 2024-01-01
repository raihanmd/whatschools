import { UseFormRegister } from "react-hook-form";
import { FormElement, Inputs, Step } from "../../types";

export type FormInputProps = {
  input: FormElement;
};

export type FormFieldContainerProps = {
  inputFields: Array<FormElement>;
};

export type FormStepperProps = {
  activeStep: number;
  step: Array<Step>;
};
