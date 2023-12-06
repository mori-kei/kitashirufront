import React from "react";
import { BoxShadow } from "../Atoms/Box/BoxShadow";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { HoverLink } from "../Atoms/Link/HoverLink";

export const Dashbord = () => {
  return (
    <Box p={30}>
      <BoxShadow p={30}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <HoverLink to={"/dashbord/articles"}>
            <BoxShadow>
              <Flex align={"center"}>
                <Text mr={2}>企業の記事</Text>
                <EditIcon />
              </Flex>
            </BoxShadow>
          </HoverLink>
          <HoverLink to={"/admin/notes"}>
            <BoxShadow>
              <Flex align={"center"}>
                <Text mr={2}>noteの記事(開発中)</Text>
                <EditIcon />
              </Flex>
            </BoxShadow>
          </HoverLink>

          <HoverLink to={"/admin/events"}>
            <BoxShadow>
              <Flex align={"center"}>
                <Text mr={2}>イベント情報(開発中)</Text>
                <EditIcon />
              </Flex>
            </BoxShadow>
          </HoverLink>
        </Flex>
      </BoxShadow>
    </Box>
  );
};
