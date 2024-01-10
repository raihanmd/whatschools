"use client";

import { Heading, Stack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Stack textAlign={"center"} py={"20"} px={"4"} zIndex={"10"}>
      <Heading as={"h1"} fontSize={"2xl"}>
        Daftar Siswa Baru
      </Heading>
    </Stack>
  );
}
