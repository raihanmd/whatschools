"use client";

import { Flex, Heading, Icon, Stack, Text, Box } from "@chakra-ui/react";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { BsPersonCheck } from "react-icons/bs";
import { RiBookMarkLine } from "react-icons/ri";

import color from "@/config/color";
import Arrow from "./Arrow";
import { Step } from "./types";

export default function MyStep() {
  return (
    <Stack
      zIndex={"10"}
      spacing={"0"}
      direction={{ base: "column", lg: "row" }}
      justify={"center"}
      align={"center"}
      divider={
        <Box
          display={{ base: "none", lg: "block" }}
          pos={"relative"}
          border={"none"}
          transform={"translateY(-5.5rem) translateX(-3rem)"}
        >
          <Icon
            color={color.utility.warning.background}
            pos={"absolute"}
            border={"none"}
            fontSize={"8xl"}
            as={Arrow}
            transform={"rotate(180deg)"}
          />
        </Box>
      }
      gap={"5"}
    >
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
            <Heading as="p" fontSize={"lg"} color={color.light.text}>
              {step.title}
            </Heading>
            <Text color={color.light.textLighter} fontSize={"sm"}>
              {step.subtitle}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
}

const STEP: Array<Step> = [
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
