import { EditIcon } from "@chakra-ui/icons";
import { Flex, Box, Text } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import { StatusBadge } from "../../Atoms/Badge/StatusBadge";
import { BoxShadow } from "../../Atoms/Box/BoxShadow";

type Props = {
  name: string;
  status: boolean;
};
export const ArticleStatusCard = ({ name, status }: Props) => {
  return (
    <BoxShadow>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Flex align={"center"}>
            <Text mr={2} fontWeight={"bold"}>
              {name}
            </Text>
            <EditIcon />
          </Flex>
        </Box>
        <Box>
          <Flex align={"center"}>
            <StatusBadge status={status} />
          </Flex>
        </Box>
      </Flex>
    </BoxShadow>
  );
};
