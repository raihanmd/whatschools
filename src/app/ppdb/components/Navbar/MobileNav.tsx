"use client";

import { Stack } from "@chakra-ui/react";

import type { MobileNavProps } from "./types";
import MobileNavItem from "./MobileNavItem";
import color from "@/config/color";

export default function MobileNav({ navItems }: MobileNavProps) {
  return (
    <Stack
      pos={"absolute"}
      top={"84"}
      right={"0"}
      w={"100%"}
      zIndex={"30"}
      bg={color.primary}
      p={4}
      display={{ lg: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
