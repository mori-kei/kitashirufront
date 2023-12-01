import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

import { HoverLink } from "../../Atoms/Link/HoverLink";

type Props = {
  title?: string;
  text?: string;
};
export const RecomendTest = ({ title, text }: Props) => {
  return (
    <Box
      width={"full"}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="0 0 8px rgba(0,0,0,0.1)"
      bg="white"
      p={6}
    >
      <Text>{title}</Text>
      <Text>{text}</Text>
      <HoverLink to={"/test"} p={0}>
        <Button mt={5}>組織診断をする</Button>
      </HoverLink>
    </Box>
  );
};
