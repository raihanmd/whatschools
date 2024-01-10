"use client";

import {
  FormControl,
  FormLabel,
  Input,
  Select,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

import type { FormInputProps } from "./types";
import { useRegistration } from "../../../contexts/RegistrationProvider";
import color from "@/config/color";

const FormInput = ({ input }: FormInputProps) => {
  const { register, errors } = useRegistration();

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
          variant="flushed"
          focusBorderColor={color.primary}
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
        <Input
          //@ts-ignore
          {...register(input.name as string)}
          variant="flushed"
          focusBorderColor={color.primary}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
        />
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
