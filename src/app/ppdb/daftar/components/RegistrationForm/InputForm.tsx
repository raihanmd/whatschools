"use client";

import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function InputForm() {
  return (
    <Stack as="form">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email"  />
      </FormControl>
    </Stack>
  );
}
