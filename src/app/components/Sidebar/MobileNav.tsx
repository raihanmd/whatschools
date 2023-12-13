"use client";

import {
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { MobileProps } from "./interfaces/Sidebar";
import color from "@/constants/color";
import ThemeToggler from "./ThemeToggler";

export default function MobileNav({ onOpen, ...rest }: MobileProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex
        justify={"space-between"}
        align={"center"}
        w={"full"}
        color={useColorModeValue(
          color.lightTheme.primary,
          color.darkTheme.primary
        )}
      >
        <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <Button onClick={toggleColorMode} bg={"none"} rounded={"full"} p={"1"}>
          <ThemeToggler />
        </Button>
      </Flex>
    </Flex>
  );
}
