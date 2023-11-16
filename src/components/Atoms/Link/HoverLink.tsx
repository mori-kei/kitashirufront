import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";

type HoverLinkProps = ChakraLinkProps &
  ReactRouterLinkProps

export const HoverLink = (props: HoverLinkProps) => (
  <ChakraLink
    as={ReactRouterLink}
    rounded="base"
    _hover={{ bg: "gray.200" }}
    p={2}
    {...props}
    color={"blackAlpha.700"}
    fontWeight={600}
    
  />
);
