"use client";

import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  FormHelperText,
} from "@chakra-ui/react";

import type { FormInputProps } from "./types";

const FormInput = ({ input }: FormInputProps) => {
  return (
    <FormControl key={input.name} isRequired>
      <FormLabel>{input.label}</FormLabel>
      {input.type === "select" ? (
        <Select placeholder={input.placeholder} name={input.name}>
          {input.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : (
        <InputGroup>
          {input.withAddon ? (
            <InputLeftAddon>{input.addOn}</InputLeftAddon>
          ) : null}
          <Input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
          />
        </InputGroup>
      )}
      {input.description ? (
        <FormHelperText>{input.description}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default FormInput;
