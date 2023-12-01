import { Button } from "@chakra-ui/react";
import React from "react";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";
type Props = {
  label: string;
  variant?: string;
  colorScheme?: string;
  size?: string;
  flexbasis?: string;
  m?: string;
  color?: string;
};
type LinkBottonProps = ChakraLinkProps & ReactRouterLinkProps & Props;
export const InternalLinkButton = (props: LinkBottonProps) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      rounded="base"
      _hover={{ bg: "gray.200" }}
      color={"blackAlpha.700"}
      {...props}
      fontWeight={600}
      flexBasis={props.flexBasis || "48%"}
    >
      <Button
        variant={props.variant}
        colorScheme={props.colorScheme || "blue"}
        size={props.size || "sm"}
        width="full"
        m={props.m || "0"}
        color={props.color}
      >
        {props.label}
      </Button>
    </ChakraLink>
  );
};
