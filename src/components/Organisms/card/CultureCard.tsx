import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Text, Image } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  imageAlt: string;
  culture: string;
  descripion: string;
  width?: string;
  maxW?: string;
  boxshadow?: string;
};
export const CultureCard = ({
  imageUrl,
  imageAlt,
  culture,
  descripion,
  maxW,
  width,
  boxshadow,
}: Props) => {
  return (
    <Card maxW={maxW} width={width} boxShadow={boxshadow}>
      <CardBody>
        <Flex justifyContent="center" alignItems="center">
          <Image
            src={imageUrl}
            alt={imageAlt}
            borderRadius="lg"
            height={{ base: "200px", md: "300px" }}
          />
        </Flex>
        <Stack mt="6" spacing="3">
          <Heading size="md">{culture}</Heading>
          <Text>{descripion}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
