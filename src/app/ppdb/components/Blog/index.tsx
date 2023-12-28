"use client";

import { Image } from "@chakra-ui/next-js";
import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import BannerPPDB from "../../../../../public/PPDB_banner.webp";
import color from "@/config/color";

export default function Blog() {
  return (
    <Stack
      pos={"relative"}
      zIndex={"20"}
      p={"10"}
      bg={useColorModeValue(color.light.foreground, color.dark.foreground)}
    >
      <Flex
        maxW={"7xl"}
        mx={"auto"}
        direction={{ base: "column", lg: "row" }}
        gap={"40"}
      >
        <Box
          pos={"relative"}
          _before={{
            content: '""',
            top: -5,
            right: -5,
            bottom: 5,
            left: 5,
            display: "block",
            border: "1px",
            borderColor: color.utility.success.background,
            borderRadius: "md",
            position: "absolute",
          }}
        >
          <Image
            borderRadius={"md"}
            pointerEvents={"none"}
            src={BannerPPDB}
            alt="Banner PPDB"
            placeholder="blur"
            width={400}
          />
        </Box>
        <Flex>
          <Text>Test</Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
