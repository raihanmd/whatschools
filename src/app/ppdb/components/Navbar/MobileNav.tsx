"use client";

import { Stack } from "@chakra-ui/react";

import type { MobileNavProps } from "./types";
import MobileNavItem from "./MobileNavItem";
import color from "@/config/color";

export default function MobileNav({ navItems }: MobileNavProps) {
  return (
    <Stack bg={color.primary} p={4} display={{ lg: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
