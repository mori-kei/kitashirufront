import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type ShadowBoxProps = BoxProps & {
  children: ReactNode;
};

export const BoxShadow = ({ children, ...rest }: ShadowBoxProps) => {
  return (
    <Box
      padding={5}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="0 0 8px rgba(0,0,0,0.1)"
      bg="white"
      {...rest}
    >
      {children}
    </Box>
  );
};
