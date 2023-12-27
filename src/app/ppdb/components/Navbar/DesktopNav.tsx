"use client";

import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";

import type { NavItem } from "./types";
import color from "@/config/color";

export default function DesktopNav({ navItems }: { navItems: Array<NavItem> }) {
  const pathname: string = usePathname();

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {navItems.map((navItem) => {
        const isActive = pathname === navItem.href;
        return (
          <Box key={navItem.label}>
            <Link
              py={"1"}
              px={"3"}
              href={navItem.href}
              fontSize={"sm"}
              fontWeight={500}
              color={isActive ? color.primaryContent : color.primaryDark}
              display={"flex"}
              alignItems={"center"}
              gap={"2"}
              rounded={"md"}
              bg={isActive ? color.primary : "none"}
              _hover={{
                textDecoration: "none",
                backgroundColor: color.primary,
                color: color.primaryContent,
              }}
            >
              {navItem.icon ? (
                <Icon
                  fontSize="16"
                  transition={"all 50ms"}
                  _groupHover={{
                    color: color.primaryContent,
                  }}
                  as={navItem.icon}
                />
              ) : null}
              <Text transition={"all 50ms"}>{navItem.label}</Text>
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
}
