"use client";

import color from "@/config/color";
import { Box, Button, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading>Light Mode</Heading>
      <Box
        bg={useColorModeValue(color.light.foreground, color.dark.foreground)}
        borderColor={useColorModeValue(color.light.border, color.dark.border)}
        p={"3"}
      >
        <Heading color={useColorModeValue(color.light.text, color.dark.text)}>
          Test
        </Heading>
        <Button
          bg={color.primary}
          _hover={{ background: color.primaryDark }}
          color={color.primaryContent}
        >
          Primary
        </Button>
      </Box>
    </>
  );
}
