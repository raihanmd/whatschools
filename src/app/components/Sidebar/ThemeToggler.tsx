"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      {colorMode === "light" ? (
        <MoonIcon color={"blue.900"} />
      ) : (
        <SunIcon color={"yellow.300"} />
      )}
    </>
  );
};

export default ThemeToggler;
