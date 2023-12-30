"use client";

import { Box, Icon } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import { RatingProps } from "./types";

export default function Rating({ rating }: RatingProps) {
  return (
    <Box dir={"row"} display={"flex"}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <Icon
                as={BsStarFill}
                key={i}
                fontSize={"12px"}
                color={"orange.400"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <Icon
                as={BsStarHalf}
                key={i}
                fontSize={"12px"}
                color={"orange.400"}
              />
            );
          }
          return (
            <Icon as={BsStar} key={i} fontSize={"12px"} color={"orange.400"} />
          );
        })}
    </Box>
  );
}
