import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { MediumInput } from "../../Molecules/Input/MediumInput";

type QuestionCardProps = {
  questionText: string;
  borderColor: string;
  setFam: (value: string) => void;
  setInno: (value: string) => void;
  setMar: (value: string) => void;
  setBure: (value: string) => void;
  fam: string;
  inno: string;
  mar: string;
  bure: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionText,
  borderColor,
  setFam,
  setInno,
  setMar,
  setBure,
  fam,
  inno,
  mar,
  bure,
  label1,
  label2,
  label3,
  label4,
}) => {
  return (
    <Card
      borderColor={borderColor}
      borderStyle="solid"
      borderWidth="2px"
      mt={20}
    >
      <CardHeader>
        <Heading size="md">{questionText}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <MediumInput
              label={label1}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFam(e.target.value);
              }}
              value={fam}
            />
          </Box>
          <Box>
            <MediumInput
              label={label2}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInno(e.target.value);
              }}
              value={inno}
            />
          </Box>
          <Box>
            <MediumInput
              label={label3}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMar(e.target.value);
              }}
              value={mar}
            />
          </Box>
          <Box>
            <MediumInput
              label={label4}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setBure(e.target.value);
              }}
              value={bure}
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
