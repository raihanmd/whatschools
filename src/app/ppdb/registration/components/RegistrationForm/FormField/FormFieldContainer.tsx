"use client";

import { Stack } from "@chakra-ui/react";

import FormInput from "./FormInput";
import type { FormFieldContainerProps } from "./types";

const FormFieldContainer = ({ inputFields }: FormFieldContainerProps) => {
  return (
    <Stack rowGap={"5"}>
      {inputFields.map((input, i) =>
        input.isMerged ? (
          <Stack key={i} direction={{ base: "column", md: "row" }}>
            {input?.fields?.map((subInput, j) => (
              <FormInput key={j} input={subInput} />
            ))}
          </Stack>
        ) : (
          <FormInput key={i} input={input} />
        )
      )}
    </Stack>
  );
};

export default FormFieldContainer;
