import { Card, CardBody, Stack, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import { Text, Image } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  imageAlt: string;
  culture: string;
  descripion: string;
  width?: string;
  maxW?: string;
};
export const CultureCard = ({
  imageUrl,
  imageAlt,
  culture,
  descripion,
  maxW,
  width,
}: Props) => {
  return (
    <Card maxW={maxW} width={width}>
      <CardBody>
        <Image src={imageUrl} alt={imageAlt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{culture}</Heading>
          <Text>{descripion}</Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};
