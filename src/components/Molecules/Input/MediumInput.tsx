import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
export const MediumInput = ({ label, value, handleChange }: Props) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <NumberInput defaultValue={0} min={0} max={100}>
        <NumberInputField value={value} onChange={handleChange} />
      </NumberInput>
    </FormControl>
  );
};
