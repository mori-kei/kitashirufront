import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

import { HoverLink } from "../../Atoms/Link/HoverLink";
import { BoxShadow } from "../../Atoms/Box/BoxShadow";

type Props = {
  title?: string;
  text?: string;
};
export const RecomendTest = ({ title, text }: Props) => {
  return (
    <BoxShadow>
      <Text>{title}</Text>
      <Text>{text}</Text>
      <HoverLink to={"/test"} p={0}>
        <Button mt={5}>組織診断をする</Button>
      </HoverLink>
    </BoxShadow>
  );
};
