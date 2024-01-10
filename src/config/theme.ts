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
    Input: {
      baseStyle: {
        field: {
          padding: "0 10px",
          _autofill: {
            boxShadow: "0 0 0px 1000px transparent inset",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          padding: "0 10px",
        },
      },
    },
  },
});
