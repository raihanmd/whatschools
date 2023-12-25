"use client";

import { Stack } from "@chakra-ui/react";

import { MobileNavProps } from "./interfaces";
import MobileNavItem from "./MobileNavItem";
import color from "@/config/color";

export default function MobileNav({ navItems }: MobileNavProps) {
  return (
    <Stack bg={color.primary} p={4} display={{ md: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
