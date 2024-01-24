import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";

type NomalLinkProps = ChakraLinkProps & ReactRouterLinkProps;

export const NomalLink = (props: NomalLinkProps) => {
  return <ChakraLink as={ReactRouterLink} {...props}></ChakraLink>;
};
