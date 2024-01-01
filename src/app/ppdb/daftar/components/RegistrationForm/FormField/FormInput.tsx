"use client";

import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

import type { FormInputProps } from "./types";
import { useRegister } from "../../../contexts/RegisterProvider";

const FormInput = ({ input }: FormInputProps) => {
  const { register, errors } = useRegister();

  return (
    <FormControl
      // @ts-ignore
      isInvalid={errors[input.name]?.message}
      key={input.name}
      isRequired
    >
      <FormLabel>{input.label}</FormLabel>
      {input.type === "select" ? (
        <Select
          //@ts-ignore
          {...register(input.name as string)}
          placeholder={input.placeholder}
          name={input.name}
        >
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
            //@ts-ignore
            {...register(input.name as string)}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
          />
        </InputGroup>
      )}
      {
        //@ts-ignore
        errors[input.name]?.message ? (
          //@ts-ignore
          <FormErrorMessage>{errors[input.name].message}</FormErrorMessage>
        ) : input.description ? (
          <FormHelperText>{input.description}</FormHelperText>
        ) : null
      }
    </FormControl>
  );
};

export default FormInput;
