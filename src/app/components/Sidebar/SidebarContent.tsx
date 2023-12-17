"use client";

import Image from "next/image";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";
import color from "@/config/color";
import NavItem from "./NavItem";
import appLogo from "../../../../public/app_logo.png";
import ThemeToggler from "./ThemeToggler";
import { SidebarProps } from "./interfaces/Sidebar";

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
        gap={"3"}
        justifyContent="space-between"
        color={useColorModeValue(color.primary, color.primary)}
      >
        <Link href={"/"}>
          <Image src={appLogo} alt="App Logo" width={40} height={40} />
        </Link>
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
