import React from "react";
import { Text, TextProps } from "@chakra-ui/react";
type Props = TextProps & {
  text: string;
};
export const Title = ({ text, ...rest }: Props) => {
  return (
    <Text fontSize={{ base: "22px", md: "30px" }} {...rest}>
      {text}
    </Text>
  );
};
