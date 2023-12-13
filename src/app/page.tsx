"use client";

import color from "@/constants/color";
import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading>Light Mode</Heading>
      <Box bg={color.darkTheme.background} p={"4"} rounded={"lg"}>
        <Box bg={color.darkTheme.tertiary} p={"3"}>
          <Heading color={color.darkTheme.text}>Test</Heading>
          <Button bg={color.darkTheme.primary} color={color.darkTheme.text}>
            Primary
          </Button>
        </Box>
      </Box>
      <Heading>Dark Mode</Heading>
      <Box bg={color.darkTheme.background} p={"4"} rounded={"lg"}>
        <Box bg={color.darkTheme.tertiary} p={"3"}>
          <Heading color={color.darkTheme.text}>Test</Heading>
          <Button bg={color.darkTheme.primary} color={color.darkTheme.text}>
            Primary
          </Button>
        </Box>
      </Box>
    </>
  );
}
