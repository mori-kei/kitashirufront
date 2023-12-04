import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuthContext } from "../context/authContext";
import { HoverLink } from "../components/Atoms/Link/HoverLink";
import axios from "axios";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuthContext();
  const [csrfState, setCsrfState] = useState<string | null>(null);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    signup(email, password);
  };
  useEffect(() => {
    const res = axios.defaults.headers.common["X-CSRF-Token"];

    if (typeof res === "string") {
      setCsrfState(res);
    }
  }, []);

  const csrf = axios.defaults.headers.common["X-CSRF-Token"];

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>登録して始めましょう</Heading>
          <Text>テスト用① {csrfState}</Text>
          <Text>テスト用②{csrf}</Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <HoverLink to={"/login"}>
                  <Text color={"blue.400"}>ログインはこちら</Text>
                </HoverLink>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                新規登録
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
