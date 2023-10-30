import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  NumberInput,
  NumberInputField,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Culturetest = () => {
  // Q1
  const [q01Fam, setQ01Fam] = useState<string>("0");
  const [q01Inno, setQ01Inno] = useState<string>("0");
  const [q01Mar, setQ01Mar] = useState<string>("0");
  const [q01Bure, setQ01Bure] = useState<string>("0");
  const [q1BorderColor, setQ1BorderColor] = useState("red");

  // 合計値の計算 100であるかのチェック
  //Q1
  useEffect(() => {
    const sum =
      parseInt(q01Fam) +
      parseInt(q01Inno) +
      parseInt(q01Mar) +
      parseInt(q01Bure);

    if (sum === 100) {
      setQ1BorderColor("green");
    } else {
      setQ1BorderColor("red");
    }
  }, [q01Fam, q01Inno, q01Mar, q01Bure]);
  //Q2

  return (
    <Flex justifyContent="center">
      <Box width="80%">
        <Card borderColor={q1BorderColor} borderStyle="solid" borderWidth="2px">
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
                      value={q01Fam}
                      onChange={(e) => {
                        setQ01Fam(e.target.value);
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
                      value={q01Inno}
                      onChange={(e) => {
                        setQ01Inno(e.target.value);
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
                      value={q01Mar}
                      onChange={(e) => {
                        setQ01Mar(e.target.value);
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
                      value={q01Bure}
                      onChange={(e) => {
                        setQ01Bure(e.target.value);
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
