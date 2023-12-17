"use client";

import {
  Button,
  Flex,
  IconButton,
  Text,
  textDecoration,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";

import { MobileProps } from "./interfaces/Sidebar";
import color from "@/config/color";
import ThemeToggler from "./ThemeToggler";
import appLogo from "../../../../public/app_logo.png";
import APP_CONFIG from "@/config/app";

export default function MobileNav({ onOpen, ...rest }: MobileProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue(color.lightTheme.sidebar, color.darkTheme.sidebar)}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        border={"none"}
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex
        justify={"space-between"}
        align={"center"}
        w={"full"}
        color={color.primary}
        px={"2"}
      >
        <Link href={"/"}>
          <Flex justify={"center"} align={"center"} gap={"4"}>
            <Image src={appLogo} alt="App Logo" width={40} height={40} />
            <Text
              fontSize={"xl"}
              fontWeight={"bold"}
              _hover={{ textDecoration: "none" }}
            >
              {APP_CONFIG.APP_NAME}
            </Text>
          </Flex>
        </Link>
        <Button onClick={toggleColorMode} bg={"none"} rounded={"full"} p={"1"}>
          <ThemeToggler />
        </Button>
      </Flex>
    </Flex>
  );
}
