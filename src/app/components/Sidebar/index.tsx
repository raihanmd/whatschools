"use client";

import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

import type { LinkItemProps } from "./types";
import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";
import color from "@/config/color";

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Trending", icon: FiTrendingUp, href: "/trending" },
  { name: "Explore", icon: FiCompass, href: "/explore" },
  { name: "Favourites", icon: FiStar, href: "/favourites" },
  { name: "Settings", icon: FiSettings, href: "/settings" },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue(color.light.background, color.dark.background)}
    >
      <SidebarContent
        LinkItems={LinkItems}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent LinkItems={LinkItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
