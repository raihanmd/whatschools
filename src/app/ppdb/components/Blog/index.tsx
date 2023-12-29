"use client";

import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
          <Image
            className="rounded-md"
            src={BannerPPDB}
            alt="Banner PPDB"
            placeholder="blur"
            width={400}
            height={565}
          />
        </Stack>
        <Flex justify={"center"} align={"start"} direction={"column"} gap={"5"}>
          <Heading as={"h3"} size={"xl"} color={color.light.text}>
            Syarat{" "}
            <Heading as="span" color={color.primary}>
              Pendaftaran
            </Heading>
          </Heading>
          <List spacing={"3"}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Memiliki Akta Kelahiran
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              KTP dan KK orang tua
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Memiliki ijazan SMP / Sederajat
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Surat keterangan Sehat
            </ListItem>
          </List>
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
      </Flex>
    </Stack>
  );
}
