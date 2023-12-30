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

import { ExternalLinkIcon } from "@chakra-ui/icons";
type Props = {
  label: string;
  variant?: string;
  colorScheme?: string;
  size?: string;
  flexbasis?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
type LinkBottonProps = ChakraLinkProps & ReactRouterLinkProps & Props;

export const ExternalLinkBotton = (props: LinkBottonProps) => {
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
        variant={props.variant || "outline"}
        colorScheme={props.colorScheme || "blue"}
        size={props.size || "sm"}
        width="full"
        onClick={props.onClick} //
      >
        {props.label}
        <ExternalLinkIcon ml={2} />
      </Button>
    </ChakraLink>
  );
};
