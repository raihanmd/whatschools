"use client";

import color from "@/config/color";
import useAppStore from "@/stores/useAppStore";
import { Box, Button, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const { count, increment } = useAppStore();

  return (
    <>
      <Heading>Light Mode</Heading>
      <Box
        bg={useColorModeValue(color.lightTheme.box, color.darkTheme.box)}
        p={"3"}
      >
        <Heading
          color={useColorModeValue(color.lightTheme.text, color.darkTheme.text)}
        >
          Test
        </Heading>
        <Button
          bg={color.primary}
          _hover={{ bg: color.primaryHover }}
          color={color.white}
        >
          Primary
        </Button>
      </Box>
    </>
  );
}
