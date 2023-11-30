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
import { InternalLinkButton } from "../Atoms/Button/InternalLinkButton";
import { NomalModal } from "../Organisms/Modal/NomalModal";

import { useNavigate } from "react-router-dom";
type Props = {
  profile: Profile;
  article: ArticleType;
};
export const Article = ({ profile, article }: Props) => {
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width: 768px)").matches; // 例: 768px以下をモバイルとして扱う
  const HighestCultureCard = useHighestCultureCard(
    article.family_point,
    article.innovation_point,
    article.market_point,
    article.bure_point
  );
  return (
    <Box p={30} pt={0}>
      <Box>
        <Text
          fontSize={{ base: "22px", md: "30px" }}
          mb={3}
          padding={5}
          pt={0}
          fontWeight={"bold"}
        >
          {article.name}
        </Text>

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
            <Text fontSize={{ base: "22px", md: "30px" }} mb={3}>
              あなたと企業の比較
            </Text>
            <Card border="none" boxShadow={"none"}>
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
                <Flex justifyContent={"space-around"} mt={-30}>
                  <Flex alignItems={"center"}>
                    <Box bgColor="#8884d8" w={3} h={3}></Box>
                    <Text>企業 </Text>
                  </Flex>
                  <Flex alignItems={"center"}>
                    <Box bgColor="#82ca9d" w={3} h={3}></Box>
                    <Text>あなた </Text>
                  </Flex>
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
            mt={{ base: 5, md: 0 }}
          >
            <Text fontSize={{ base: "22px", md: "30px" }} mb={3}>
              企業の組織文化タイプ
            </Text>
            {HighestCultureCard}

            <NomalModal
              title="組織文化とは？"
              openText="組織文化とは？"
              closeText="戻る"
              secondlyActionText="4つのタイプを見てみる"
              size="xl"
              buttonWidth="full"
              infoBool={true}
              onClick={() => {
                navigate("/culture");
              }}
              children={
                <>
                  <Text>
                    組織文化は2009年にCameron and
                    Quinnによって作られた職場の雰囲気をタイプ分けするための指標です。
                  </Text>
                  <Text mt={5}>
                    家族文化,イノベーション文化,マーケット文化,官僚文化の4つのタイプに分けられます
                  </Text>
                </>
              }
            />
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
            <Text fontSize={{ base: "22px", md: "30px" }} mb="4">
              企業について
            </Text>
            <Text mb="2" fontWeight="600">
              事業内容
            </Text>
            <Text>{article.overview}</Text>
            <Text mt="4" mb="2" fontWeight="600">
              自社事業の魅力
            </Text>
            <Text>{article.appeal}</Text>
            <Text mt="4" mb="2" fontWeight="600">
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
                    height={isMobile ? "300px" : "500px"}
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
      <Box mt={20}>
        <InternalLinkButton label="他の企業も見てみる" to={"/articles"} />
      </Box>
    </Box>
  );
};
