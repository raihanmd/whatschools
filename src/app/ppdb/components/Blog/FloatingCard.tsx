"use client";

import { Flex } from "@chakra-ui/react";

import color from "@/config/color";
import { FloatingCardProps } from "./types";

export default function FloatingCard({ children, ...rest }: FloatingCardProps) {
  return (
    <Flex
      {...rest}
      display={{ base: "none", md: "flex" }}
      pos={"absolute"}
      p={"2"}
      bg={color.light.foreground}
      shadow={"xl"}
      rounded={"lg"}
      gap={"3"}
      align={"center"}
      transition={"all .3s ease"}
      _hover={{
        transform: "translateY(-8px)",
      }}
    >
      {children}
    </Flex>
  );
}
