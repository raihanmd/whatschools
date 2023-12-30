export type Step = {
  label: string;
};

export type FormField = {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  options?: Array<string>;
  description?: string;
  withAddon?: boolean;
  addOn?: string;
};

export type FormElement = FormField & {
  isMerged?: boolean;
  fields?: Array<FormField>;
};
