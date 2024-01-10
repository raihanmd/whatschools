"use client";

import { Stack, Text } from "@chakra-ui/react";

import RegistrationForm from "./components/RegistrationForm";
import Header from "./components/Header";

export default function page() {
  return (
    <Stack
      gap={"0"}
      pos={"relative"}
      _before={{
        content: '""',
        bg: "#d2d8ea",
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "full",
        top: "-20rem",
        left: "-10rem",
      }}
    >
      <Header />
      <RegistrationForm />
    </Stack>
  );
}
