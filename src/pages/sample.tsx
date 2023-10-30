import {
  Flex,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Box,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

export const Sample = () => {
  const [q06Fam, setq06Fam] = useState<string>("0");
  const [q06Inno, setq06Inno] = useState<string>("0");
  const [q06Mar, setq06Mar] = useState<string>("0");
  const [q06Bure, setq06Bure] = useState<string>("0");
  const [q06BorderColor, setq06BorderColor] = useState("red");
  useEffect(() => {
    const sum =
      parseInt(q06Fam) +
      parseInt(q06Inno) +
      parseInt(q06Mar) +
      parseInt(q06Bure);

    if (sum === 100) {
      setq06BorderColor("green");
    } else {
      setq06BorderColor("red");
    }
  }, [q06Fam, q06Inno, q06Mar, q06Bure]);
  return (
    <Flex justifyContent="center">
      <Box width="80%">
        <Card
          borderColor={q06BorderColor}
          borderStyle="solid"
          borderWidth="2px"
          mt={20}
        >
          <CardHeader>
            <Heading size="md">1.顕著にみられる特徴</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <FormControl>
                  <FormLabel>
                    指示系統によるしっかりとした上下関係重視というよりは、上司や先輩、または（将来）部下や後輩などともゆるやかで、フレンドリーな関係性が構築されている職場がいい。同僚や上司・部下は家族の延長のような存在であってほしいし、価値観や考えはお互いしっかり共有しておきたいと思う。
                  </FormLabel>
                  <NumberInput defaultValue={0} min={0} max={100}>
                    <NumberInputField
                      value={q06Fam}
                      onChange={(e) => {
                        setq06Fam(e.target.value);
                      }}
                    />
                  </NumberInput>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>
                    新しいことに積極的で、起業家精神にあふれるクリエイティブな職場がいい。同僚や上司・部下はリスクを恐れず進んで革新的な選択をしていく人たちがいい。
                  </FormLabel>
                  <NumberInput defaultValue={0} min={0} max={100}>
                    <NumberInputField
                      value={q06Inno}
                      onChange={(e) => {
                        setq06Inno(e.target.value);
                      }}
                    />
                  </NumberInput>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>
                    プロセスや過程での努力などではなく、結果や成果、アウトプットで評価をしてくれるような職場がいい。仕事をする上では、達成すべき目標や目的を明確に示してほしい。
                  </FormLabel>
                  <NumberInput defaultValue={0} min={0} max={100}>
                    <NumberInputField
                      value={q06Mar}
                      onChange={(e) => {
                        setq06Mar(e.target.value);
                      }}
                    />
                  </NumberInput>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>
                    仕事の役割分担が明確になされていて、自分が何をすべきかをしっかり指示してくれるような職場がいい。自分個人の発想やオリジナリティに基づいて臨機応変に仕事をするというよりは、どうすればよいのかという方法や手続きをきちんと具体的に示してほしい。
                  </FormLabel>
                  <NumberInput defaultValue={0} min={0} max={100}>
                    <NumberInputField
                      value={q06Bure}
                      onChange={(e) => {
                        setq06Bure(e.target.value);
                      }}
                    />
                  </NumberInput>
                </FormControl>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
};

// const [q06Fam, setq06Fam] = useState<string>("0");
//   const [q06Inno, setq06Inno] = useState<string>("0");
//   const [q06Mar, setq06Mar] = useState<string>("0");
//   const [q06Bure, setq06Bure] = useState<string>("0");
//   const [q06BorderColor, set01BorderColor] = useState("red");
