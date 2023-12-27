"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { Flex, Heading, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { BsPersonCheck } from "react-icons/bs";
import { RiBookMarkLine } from "react-icons/ri";

import color from "@/config/color";
import { Step } from "./types";

export default function Hero() {
  return (
    <Stack
      maxW={"6xl"}
      mx={"auto"}
      align={"center"}
      py={{ base: "10", md: "20" }}
      gap={"10"}
      px={"10"}
      _before={{
        content: '""',
        bg: "#d2d8ea",
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "full",
        top: -40,
        left: -40,
        right: 0,
        bottom: 0,
      }}
    >
      <Flex
        zIndex={"10"}
        direction={"column"}
        align={"center"}
        gap={"3"}
        w={{ md: "90%", lg: "80%", xl: "70%" }}
        textAlign={"center"}
      >
        <Heading as={"h1"} size={"xl"} color={color.light.text}>
          Selamat datang{" "}
          <Heading as="span" color={color.primary}>
            calon siswa baru
          </Heading>
        </Heading>
        <Text px={"5"} color={color.light.textLight} textAlign={"center"}>
          Anda dapat dengan mudah mengisi data diri untuk mendaftar ke sekolah
          WHATSCHOOL dengan cara klik tombol daftar dibawah
        </Text>
        <Link
          href={"/ppdb/daftar"}
          py={"2"}
          px={"4"}
          fontSize={"sm"}
          rounded={"5px"}
          variant={"solid"}
          fontWeight={"semibold"}
          color={color.primaryContent}
          bg={color.primary}
          _hover={{
            bg: color.primaryDark,
            textDecoration: "none",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          gap={"2"}
        >
          <Text>Daftar siswa baru</Text>
          <Icon fontSize={"xl"} as={ChevronRightIcon} />
        </Link>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={"5"}>
        {STEP.map((step) => (
          <Flex
            key={step.title}
            direction={"column"}
            gap={"5"}
            justify={"center"}
            align={"center"}
            px={{ base: "10", sm: "24", md: "0" }}
          >
            <Flex
              pos={"relative"}
              _before={{
                content: '""',
                bg: "#a5d5a5",
                position: "absolute",
                width: "25px",
                height: "25px",
                borderRadius: "full",
                left: -2,
                bottom: -2,
              }}
            >
              <Icon
                as={step.icon}
                zIndex={"2"}
                color={color.utility.success.background}
                fontSize={"4xl"}
              />
            </Flex>
            <Flex
              direction={"column"}
              gap={"2"}
              justify={"center"}
              align={"center"}
              textAlign={"center"}
            >
              <Heading as="h3" fontSize={"lg"} color={color.light.text}>
                {step.title}
              </Heading>
              <Text color={color.light.textLighter} fontSize={"sm"}>
                {step.subtitle}
              </Text>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

const STEP: Step[] = [
  {
    icon: LiaFeatherAltSolid,
    title: "Isi Data Diri",
    subtitle:
      "Silahkan untuk mengisi data diri pada semua kolom yang disediakan",
  },
  {
    icon: BsPersonCheck,
    title: "Verifikasi Panitia",
    subtitle: "Panitia PPDB akan melakukan verifikasi kelengkapan data anda",
  },
  {
    icon: RiBookMarkLine,
    title: "Selesai dan Mudah",
    subtitle:
      "Panitia PPDB akan menghubungi anda mengenai informasi lebih lanjut",
  },
];
