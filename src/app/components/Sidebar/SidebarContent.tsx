"use client";

import {
  Box,
  Button,
  CloseButton,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import NavItem from "./NavItem";
import { SidebarProps } from "./interfaces/Sidebar";
import color from "@/constants/color";
import ThemeToggler from "./ThemeToggler";

export default function SidebarContent({
  LinkItems,
  onClose,
  ...rest
}: SidebarProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue(color.lightTheme.sidebar, color.darkTheme.sidebar)}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        color={useColorModeValue(color.primary, color.primary)}
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <Button
          onClick={toggleColorMode}
          bg={"none"}
          rounded={"full"}
          p={"1"}
          display={{ base: "none", md: "flex" }}
        >
          <ThemeToggler />
        </Button>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}
