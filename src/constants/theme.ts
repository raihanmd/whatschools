/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-dm)",
    body: "var(--font-rubik)",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});
