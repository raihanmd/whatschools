"use client";

import { theme } from "@/constants/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function ChakraUIProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
