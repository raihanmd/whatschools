"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

import color from "@/config/color";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      bg={"none"}
      _hover={{
        background: color.primaryLight,
      }}
      rounded={"full"}
      p={"1"}
      display={{ base: "none", md: "flex" }}
    >
      {colorMode === "light" ? (
        <MoonIcon color={color.light.text} />
      ) : (
        <SunIcon color={"yellow.400"} />
      )}
    </Button>
  );
}
