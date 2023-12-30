"use client";

import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiGoogleforms } from "react-icons/si";

import APP_CONFIG from "@/config/app";
import BannerPPDB from "../../../../../public/PPDB_banner.webp";
import appLogo from "../../../../../public/app_logo.webp";
import color from "@/config/color";
import Terms from "./Terms";
import Rating from "@/app/components/Rating";
import FloatingCard from "./FloatingCard";
import { Link } from "@chakra-ui/next-js";

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
        gap={{ base: "10", lg: "20" }}
      >
        <Stack
          maxW={"400px"}
          mx={"auto"}
          pos={"relative"}
          justify={"center"}
          align={"center"}
          _before={{
            content: '""',
            top: -5,
            left: 5,
            right: -5,
            bottom: 5,
            display: "block",
            border: "1px",
            borderColor: color.utility.success.background,
            borderRadius: "md",
            position: "absolute",
          }}
        >
          <FloatingCard top={"5rem"} left={"-7rem"}>
            <Box
              p={"4"}
              bg={color.primaryContent}
              color={color.primary}
              rounded={"full"}
              fontSize={"lg"}
            >
              <SiGoogleforms />
            </Box>
            <Box w={"9rem"} textAlign={"center"}>
              <Heading fontSize={"md"}>
                Klik untuk{" "}
                <Heading
                  as={Link}
                  href={"/ppdb/daftar"}
                  fontSize={"md"}
                  color={color.primary}
                >
                  Daftar
                </Heading>{" "}
                Siswa
              </Heading>
            </Box>
          </FloatingCard>
          <FloatingCard bottom={"5rem"} right={"-7rem"}>
            <Image
              placeholder="blur"
              src={appLogo}
              alt="App Logo"
              width={52}
              height={52}
              className="rounded-logo"
            />
            <Flex direction={"column"} gap={"1"}>
              <Heading fontSize={"md"}>{APP_CONFIG.APP_NAME}</Heading>
              <Rating rating={5} />
            </Flex>
          </FloatingCard>
          <Image
            className="rounded-md"
            src={BannerPPDB}
            alt="Banner PPDB"
            placeholder="blur"
            width={400}
            height={565}
          />
        </Stack>
        <Terms />
      </Flex>
    </Stack>
  );
}
