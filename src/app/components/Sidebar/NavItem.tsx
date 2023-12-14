"use client";

import { Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";

import { NavItemProps } from "./interfaces/Sidebar";
import color from "@/constants/color";

export default function NavItem({ icon, children, ...rest }: NavItemProps) {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        transition={"all 300ms"}
        _hover={{
          bg: useColorModeValue(color.primary, color.primary),
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            transition={"all 300ms"}
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
}
