"use client";

import { Box, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { NavItem } from "./interfaces";
import color from "@/config/color";
import { Link } from "@chakra-ui/next-js";

export default function DesktopNav({ navItems }: { navItems: Array<NavItem> }) {
  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            py={"1"}
            px={"3"}
            href={navItem.href}
            fontSize={"sm"}
            fontWeight={500}
            color={useColorModeValue(color.light.text, color.dark.text)}
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              backgroundColor: color.primary,
              color: color.primaryContent,
            }}
          >
            {navItem.icon ? (
              <Icon
                fontSize="16"
                transition={"all 100ms"}
                _groupHover={{
                  color: color.primaryContent,
                }}
                as={navItem.icon}
              />
            ) : null}
            <Text transition={"all 100ms"}>{navItem.label}</Text>
          </Link>
        </Box>
      ))}
    </Stack>
  );
}
