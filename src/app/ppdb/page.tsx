"use client";

import { Stack } from "@chakra-ui/react";

import color from "@/config/color";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from "./components/Blog";

export default function page() {
  return (
    <Stack bg={color.primaryContent} px={{ base: "0", lg: "2" }}>
      <Navbar />
      <Hero />
      <Blog />
    </Stack>
  );
}
