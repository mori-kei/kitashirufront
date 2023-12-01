import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import mock from "../../images/mock.png";
import choice from "../../images/choice.png";
import { InternalLinkButton } from "../Atoms/Button/InternalLinkButton";
import { ExternalLinkBotton } from "../Atoms/Button/ExternalLinkBotton";
import { Title } from "../Atoms/Text/Title";
export const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box>
      <Flex gap={10} justifyContent={"center"} p={30}>
        <Box textAlign={"center"} w={{ base: "100%", md: "45%" }}>
          <Text fontWeight="600" fontSize={{ base: "24px", md: "30px" }}>
            北海道で自分に合った<br></br>企業を探すなら
          </Text>
          <Text
            color={"green.400"}
            fontWeight={"bold"}
            fontSize={{ base: "16px", md: "18px" }}
            mt={3}
          >
            あなたと企業を雰囲気でマッチング
          </Text>
          {isMobile ? (
            // SP用の縦並びレイアウト
            <Box>
              <Box mt={5}>
                <InternalLinkButton
                  label="登録する（無料）"
                  to={"/signup"}
                  size={"md"}
                />
              </Box>
              <Box mt={5}>
                <ExternalLinkBotton
                  label="採用担当者様はこちら"
                  to={"https://www.hgu.jp/"}
                  size={"md"}
                />
              </Box>
            </Box>
          ) : (
            // PC用の横並びレイアウト
            <Flex gap={5} mt={5} justifyContent={"center"}>
              <Box>
                <InternalLinkButton
                  label="登録する（無料）"
                  to={"/signup"}
                  size={"lg"}
                />
              </Box>
              <Box>
                <ExternalLinkBotton
                  label="採用担当者様はこちら"
                  to={"https://www.hgu.jp/"}
                  size={"lg"}
                />
              </Box>
            </Flex>
          )}
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Image src={choice} width="400px" />
        </Box>
      </Flex>
      <Box bgColor={"yellow.50"} p={30}>
        {isMobile ? (
          // SP用の縦並びレイアウト
          <Stack spacing={5}>
            <Box>
              <Title fontWeight={"bold"} text="きたしるの特徴" />

              <Text fontWeight={"bold"}>雰囲気でマッチング</Text>
              <Text mt={5}>
                事業内容・事業規模・事業内容など、就職活動をする際、考慮しなければならない要素は沢山あります。
                しかし、大学生にとっては企業に就職するのは初めてであるため、どのような企業が自分に合うかわからないことがあるかと思います。
                そこで、企業の職場の雰囲気とあなたの求める職場の雰囲気を測定し、照らし合わせることで企業選びをサポートします。
              </Text>
            </Box>
            <Box textAlign={"center"}>
              <Image margin="0 auto" src={mock} width="200px" />
            </Box>
          </Stack>
        ) : (
          // PC用の横並びレイアウト
          <Flex justifyContent={"center"}>
            <Box w={{ base: "100%", md: "45%" }}>
              <Title fontWeight={"bold"} text="きたしるの特徴" />

              <Text fontWeight={"bold"}>雰囲気でマッチング</Text>
              <Text mt={5}>
                事業内容・事業規模・事業内容など、就職活動をする際、考慮しなければならない要素は沢山あります。
                しかし、大学生にとっては企業に就職するのは初めてであるため、どのような企業が自分に合うかわからないことがあるかと思います。
                そこで、企業の職場の雰囲気とあなたの求める職場の雰囲気を測定し、照らし合わせることで企業選びをサポートします。
              </Text>
            </Box>
            <Box w={{ base: "100%", md: "45%" }} textAlign={"center"}>
              <Image margin="0 auto" src={mock} width="200px" />
            </Box>
          </Flex>
        )}
      </Box>
      <Box bgColor={"yellow.100"} p={30}>
        <Box w={{ base: "100%", md: "90%" }} margin="0 auto">
          <Title
            text="自分に合った企業を探してみましょう！"
            textAlign={"center"}
            fontWeight={"bold"}
          />

          <Box width="50%" margin="0 auto" mt={10}>
            <InternalLinkButton
              variant={"solid"}
              colorScheme="yellow"
              color="#fff"
              size="lg"
              label="組織診断をする"
              to={"/signup"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
