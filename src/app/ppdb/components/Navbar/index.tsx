"use client";

import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  useColorModeValue,
  Text,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Image, Link } from "@chakra-ui/next-js";
import { PiBookBookmarkLight } from "react-icons/pi";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaWpforms } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import type { NavItem } from "./types";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import appLogo from "../../../../../public/app_logo.png";
import color from "@/config/color";
import APP_CONFIG from "@/config/app";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      pos={"fixed"}
      top={"0"}
      right={"0"}
      w={"100%"}
      zIndex={"30"}
      px={{ base: "0", lg: "2" }}
    >
      <Flex
        bg={useColorModeValue(color.light.foreground, color.dark.foreground)}
        py={"4"}
        px={{ base: "5", xl: "20" }}
        shadow={"lg"}
        align={"center"}
        gap={"2"}
      >
        <Flex flex={"1"} gap={"2"}>
          <Flex gap={"3"} align={"center"} w={"auto"}>
            <Image
              src={appLogo}
              alt="App Logo"
              width={100}
              height={100}
              w={"52px"}
              h={"52px"}
              pointerEvents={"none"}
            />
            <Flex direction={"column"}>
              <Heading fontSize={"md"}>{APP_CONFIG.APP_NAME}</Heading>
              <Text fontSize={"xs"}>Tahun 2023/2024</Text>
            </Flex>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            flex={"1"}
            justify={"center"}
            w={"full"}
          >
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
        </Flex>
        <Flex display={{ base: "flex", lg: "none" }}>
          <IconButton
            onClick={onToggle}
            bg={useColorModeValue(
              color.light.foreground,
              color.dark.foreground
            )}
            _hover={{
              background: useColorModeValue(
                color.light.border,
                color.dark.border
              ),
            }}
            color={useColorModeValue(color.light.text, color.dark.text)}
            icon={
              isOpen ? (
                <CloseIcon w={"3"} h={"3"} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Stack display={{ base: "none", lg: "flex" }}>
          <Link
            href={"/signin"}
            py={"2"}
            px={"4"}
            fontSize={"sm"}
            rounded={"5px"}
            variant={"solid"}
            fontWeight={"semibold"}
            color={color.primaryContent}
            bg={color.primary}
            _hover={{
              bg: color.primaryDark,
              textDecoration: "none",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            gap={"2"}
          >
            <Text>Masuk / Login</Text>
            <Icon as={LuLogIn} />
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Halaman Utama",
    href: "/ppdb",
    icon: PiBookBookmarkLight,
  },
  {
    label: "Informasi",
    href: "/ppdb/informasi",
    icon: LiaCommentsSolid,
  },
  {
    label: "Pendaftaran",
    href: "/ppdb/daftar",
    icon: FaWpforms,
  },
  {
    label: "Kontak Panitia",
    href: "/ppdb/kontak",
    icon: TfiHeadphoneAlt,
  },
];
