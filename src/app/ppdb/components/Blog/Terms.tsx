'use client'

import color from "@/config/color"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Link } from "@chakra-ui/next-js"
import { Flex, Heading, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"


export default function Terms() {
  return (
<Flex justify={"center"} align={"start"} direction={"column"} gap={"5"}>
          <Heading as={"h2"} size={"xl"} color={color.light.text}>
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
        </Flex>  )
}
