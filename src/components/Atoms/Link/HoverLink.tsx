import { Link, LinkProps } from "@chakra-ui/react";

export const HoverLink = (props: LinkProps) => (
  <Link
    rounded="base"
    _hover={{ bg: "gray.200" }}
    p={2}
    {...props}
    color={"blackAlpha.700"}
    fontWeight={600}
  />
);
