"use client";

import color from "@/config/color";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Box
      zIndex={"10"}
      h={"100svh"}
      bg={useColorModeValue(color.light.foreground, color.dark.foreground)}
    >
      index
    </Box>
  );
}
