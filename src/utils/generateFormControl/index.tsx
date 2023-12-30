"use client";

import { InputFields } from "@/app/ppdb/daftar/components/RegistrationForm/types";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
} from "@chakra-ui/react";

export default function generateFormControl(input: InputFields) {
  switch (input.type) {
    case "password":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <Input
            type="password"
            placeholder={input.placeholder}
            name={input.name}
          />
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    case "number":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <InputGroup>
            {input.withAddon ? (
              <InputLeftAddon>{input.addOn}</InputLeftAddon>
            ) : null}
            <Input
              type="number"
              placeholder={input.placeholder}
              name={input.name}
            />
          </InputGroup>
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    case "text":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <InputGroup>
            <Input
              type="text"
              placeholder={input.placeholder}
              name={input.name}
            />
          </InputGroup>
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    case "date":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <Input type="date" name={input.name} />
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    case "select":
      return (
        <FormControl key={input.name} isRequired>
          <FormLabel>{input.label}</FormLabel>
          <Select placeholder={input.placeholder} name={input.name}>
            {input.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          {input.description ? (
            <FormHelperText>{input.description}</FormHelperText>
          ) : null}
        </FormControl>
      );
    default:
      return null;
  }
}
