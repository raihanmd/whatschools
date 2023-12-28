"use client";

import { Stack } from "@chakra-ui/react";

import MyStep from "./MyStep";
import HeadLine from "./HeadLine";

export default function Hero() {
  return (
    <Stack
      pos={"relative"}
      maxW={"6xl"}
      mx={"auto"}
      pt={{ base: "124px", md: "164px" }}
      pb={{ base: "10", md: "24" }}
      align={"center"}
      gap={"10"}
      px={"10"}
      _before={{
        content: '""',
        bg: "#d2d8ea",
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "full",
        top: "-250px",
        left: "-250px",
      }}
      _after={{
        content: '""',
        bg: "#d2d8ea",
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "full",
        bottom: "-40px",
        right: "40px",
      }}
    >
      <HeadLine />
      <MyStep />
    </Stack>
  );
}
