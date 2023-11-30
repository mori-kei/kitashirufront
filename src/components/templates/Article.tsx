import React from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CultureCompareChart } from "../Molecules/Chart/CultureCompareChart";
import { Sidebar } from "../Organisms/Sidebar/Sidebar";
import { ExternalLinkBotton } from "../Atoms/Button/ExternalLinkBotton";
import { Article as ArticleType, Profile } from "../../types";
import useHighestCultureCard from "../../hooks/useRandomHighestCulture";

type Props = {
  profile: Profile;
  article: ArticleType;
};
export const Article = ({ profile, article }: Props) => {
  const HighestCultureCard = useHighestCultureCard(
    article.family_point,
    article.innovation_point,
    article.market_point,
    article.bure_point
  );
  return (
    <Box p={30}>
      <Box>
        <Text fontSize="2.6em">{article.name}</Text>

        <Flex
          flexWrap="wrap"
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            width={{ base: "100%", md: "45%" }}
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
                  resultFam={article.family_point}
                  resultInno={article.innovation_point}
                  resultMar={article.market_point}
                  resultBure={article.bure_point}
                  userFam={profile.family}
                  userInno={profile.Innovation}
                  userMar={profile.market}
                  userBure={profile.beuraucracy}
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
                        <Th>組織文化</Th>
                        <Th>あなた</Th>
                        <Th>企業</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>家族文化</Td>
                        <Td>{profile.family}</Td>
                        <Td>{article.family_point}</Td>
                      </Tr>
                      <Tr>
                        <Td>イノベーション文化</Td>
                        <Td>{profile.Innovation}</Td>
                        <Td>{article.innovation_point}</Td>
                      </Tr>
                      <Tr>
                        <Td>マーケット文化</Td>
                        <Td>{profile.market}</Td>
                        <Td>{article.market_point}</Td>
                      </Tr>
                      <Tr>
                        <Td>官僚文化</Td>
                        <Td>{profile.beuraucracy}</Td>
                        <Td>{article.bure_point}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </Box>
          <Box
            width={{ base: "100%", md: "45%" }}
            padding={5}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="0 0 8px rgba(0,0,0,0.1)"
            bg="white"
          >
            <Text fontSize="2.0em">企業の組織文化タイプ</Text>
            {HighestCultureCard}
          </Box>
        </Flex>
        <Flex
          flexWrap="wrap"
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          mt={5}
        >
          <Box
            width={{ base: "column", md: "65%" }}
            padding={5}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="0 0 8px rgba(0,0,0,0.1)"
            bg="white"
          >
            <Text fontSize="2.0em" fontWeight="bold" mb="4">
              どんな企業？
            </Text>
            <Text fontWeight="bold" mb="2">
              事業内容
            </Text>
            <Text>{article.overview}</Text>
            <Text fontWeight="bold" mt="4" mb="2">
              自社事業の魅力
            </Text>
            <Text>{article.appeal}</Text>
            <Text fontWeight="bold" mt="4" mb="2">
              採用メッセージ
            </Text>
            <Text>{article.message}</Text>
            <TableContainer>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>資本金</Td>
                    <Td>{article.capital_amount}</Td>
                  </Tr>
                  <Tr>
                    <Td>売上</Td>
                    <Td>{article.earning_amount}</Td>
                  </Tr>
                  <Tr>
                    <Td>従業員数</Td>
                    <Td>{article.company_size}人</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            {article.url ? (
              <>
                <Box mt={10}>
                  <iframe
                    title="企業Webサイト"
                    src={article.url}
                    width="100%"
                    height="500px"
                  ></iframe>
                </Box>
                <Box mt={10}>
                  <ExternalLinkBotton label="企業のHPを見る" to={article.url} />
                </Box>
              </>
            ) : null}
          </Box>
          <Box width={{ base: "column", md: "25%" }}>
            <Sidebar></Sidebar>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
