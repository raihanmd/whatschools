"use client";

import color from "@/constants/color";
import useAppStore from "@/store/useAppStore";
import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  const { count, increment } = useAppStore();

  return (
    <>
      <Heading>Light Mode</Heading>
      <Box bg={color.lightTheme.box} p={"3"}>
        <Heading color={color.lightTheme.text}>Test</Heading>
        <Button
          bg={color.primary}
          _hover={{ bg: color.primaryHover }}
          color={color.white}
        >
          Primary
        </Button>
      </Box>
      <Heading>Dark Mode</Heading>
      <Box bg={color.darkTheme.box} p={"3"}>
        <Heading color={color.darkTheme.text}>{count}</Heading>
        <Button
          onClick={increment}
          bg={color.primary}
          color={color.darkTheme.text}
        >
          One up
        </Button>
      </Box>
    </>
  );
}
