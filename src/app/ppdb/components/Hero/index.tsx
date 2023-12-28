"use client";

import { Stack } from "@chakra-ui/react";

import MyStep from "./MyStep";
import HeadLine from "./HeadLine";

export default function Hero() {
  return (
    <Stack
      maxW={"6xl"}
      mx={"auto"}
      mt={"84px"}
      align={"center"}
      py={{ base: "10", md: "20" }}
      gap={"10"}
      px={"10"}
      _before={{
        content: '""',
        bg: "#d2d8ea",
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "full",
        top: "-200px",
        left: "-200px",
      }}
      _after={{
        content: '""',
        bg: "#d2d8ea",
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "full",
        top: "510px",
        right: "40px",
      }}
    >
      <HeadLine />
      <MyStep />
    </Stack>
  );
}
