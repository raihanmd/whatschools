"use client";

import { Stack, Text } from "@chakra-ui/react";

import color from "@/config/color";
import RegistrationForm from "./components/RegistrationForm";
import Header from "./components/Header";

export default function page() {
  return (
    <Stack gap={"0"}>
      <Header />
      <RegistrationForm />
    </Stack>
  );
}
