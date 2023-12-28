"use client";

import color from "@/config/color";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";

export default function HeadLine() {
  return (
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
  );
}
