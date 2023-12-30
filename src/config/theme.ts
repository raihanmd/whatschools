/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
//@ts-ignore
import { StepsTheme as Steps } from "chakra-ui-steps";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-dm)",
    body: "var(--font-rubik)",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  components: {
    Steps,
  },
});
