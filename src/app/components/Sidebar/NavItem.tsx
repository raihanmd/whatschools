"use client";

import { Box, Flex, Icon } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import { NavItemProps } from "./interfaces/Sidebar";
import color from "@/config/color";

export default function NavItem({
  icon,
  children,
  href,
  ...rest
}: NavItemProps) {
  const pathname: string = usePathname();

  const isActive = pathname === href;

  return (
    <Box
      as="a"
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        role="group"
        cursor="pointer"
        transition={"all 100ms"}
        color={color.primaryContent}
        bg={isActive ? color.primaryDark : "none"}
        _hover={{
          bg: color.primaryDark,
          color: color.primaryContent,
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            transition={"all 100ms"}
            _groupHover={{
              color: color.primaryContent,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
}
