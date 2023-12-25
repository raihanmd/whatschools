"use client";

import { Box, Stack, Text } from "@chakra-ui/react";

import { NavItem } from "./interfaces";
import color from "@/config/color";

export default function MobileNavItem({ label, href }: NavItem) {
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={color.primaryContent}>
          {label}
        </Text>
      </Box>
    </Stack>
  );
}
