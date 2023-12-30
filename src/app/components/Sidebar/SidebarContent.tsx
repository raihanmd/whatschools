"use client";

import Image from "next/image";
import { Box, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import type { SidebarProps } from "./types";
import color from "@/config/color";
import NavItem from "./NavItem";
import appLogo from "../../../../public/app_logo.webp";
import ThemeToggler from "../ThemeToggler";

export default function SidebarContent({
  LinkItems,
  onClose,
  ...rest
}: SidebarProps) {
  return (
    <Box
      bg={color.primary}
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
          <Image
            className="rounded-logo"
            placeholder="blur"
            src={appLogo}
            alt="App Logo"
            width={52}
            height={52}
          />
        </Link>
        <ThemeToggler />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}
