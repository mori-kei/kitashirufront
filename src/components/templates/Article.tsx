import React from "react";
import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CultureCard } from "../Organisms/card/CultureCard";
import family from "../../images/family.png";
import { CultureCompareChart } from "../Molecules/Chart/CultureCompareChart";
import { Sidebar } from "../Organisms/Sidebar/Sidebar";
export const Article = () => {
  return (
    <Box p={5}>
      <Box>
        <Text fontSize="2.6em">きたしる株式会社</Text>

        <Flex
          flexWrap="wrap"
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            width={{ base: "98%", md: "45%" }}
            padding={5}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="0 0 8px rgba(0,0,0,0.1)"
            bg="white"
          >
            <Text fontSize="2.0em">あなたと企業の比較</Text>
            <Card border="none">
              <CardBody>
                <CultureCompareChart
                  resultFam={10}
                  resultInno={10}
                  resultMar={10}
                  resultBure={1}
                  userFam={50}
                  userInno={50}
                  userMar={50}
                  userBure={50}
                />
                <Flex mt={{ base: "-100px", md: "-100px" }} gap={8} mb={10}>
                  <Text p={1} bgColor="rgba(130, 202, 157, 0.6)" color="">
                    あなた
                  </Text>
                  <Text p={1} bgColor="rgba(136, 132, 216, 0.6)" color="">
                    企業
                  </Text>
                </Flex>
                <TableContainer>
                  <Table variant="simple">
                    <TableCaption>あなたと企業の組織文化の比較</TableCaption>
                    <Thead>
                      <Tr>
                        <Th>あなた</Th>
                        <Th>企業</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                      </Tr>
                      <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th>あなた</Th>
                        <Th>企業</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </Box>
          <Box
            width={{ base: "98%", md: "45%" }}
            padding={5}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="0 0 8px rgba(0,0,0,0.1)"
            bg="white"
          >
            <Text fontSize="2.0em">企業の組織文化タイプ</Text>
            <CultureCard
              imageUrl={family}
              imageAlt="家族文化の画像"
              culture="家族文化"
              descripion="人々が多くのものを共有する非常にフレンドリーな職場。組織は人材が成長することの長期的なメリットを重視し、一体感とやる気を非常に重視する。顧客への心配りと人々への気遣いがあることが組織の成功と定義される。"
            />
          </Box>
        </Flex>
        <Flex
          flexWrap="wrap"
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            width="65%"
            padding={5}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="0 0 8px rgba(0,0,0,0.1)"
            bg="white"
            mt={5}
          >
            <Text fontSize="2.0em" fontWeight="bold" mb="4">
              この企業はどんな企業？
            </Text>
            <Text fontWeight="bold" mb="2">
              事業内容
            </Text>
            <Text>大学生に経営学の講義を行う。</Text>
            <Text fontWeight="bold" mt="4" mb="2">
              自社事業の魅力
            </Text>
            <Text>
              北海道内で唯一導入しているAIを使った最新システムを使って教育を行えます。
            </Text>
            <Text fontWeight="bold" mt="4" mb="2">
              採用メッセージ
            </Text>
            <Text>
              文系理系問わず募集しています！未経験者でもやる気があれば大丈夫です！
            </Text>
            <iframe
              title="企業Webサイト"
              src="https://www.hgu.jp/"
              width="100%"
              height="500px"
            ></iframe>
          </Box>
          <Box width="25%" padding={5}>
            <Sidebar></Sidebar>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
