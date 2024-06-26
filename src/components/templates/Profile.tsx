import { Divider, Flex, Stack, Text } from "@chakra-ui/layout";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Header } from "../Organisms/Header/Header";

import { ButtonGroup, Button } from "@chakra-ui/button";
import axios, { AxiosError } from "axios";
import CultureChart from "../Molecules/Chart/CultureChart";
import { Article, CultureValue, Profile } from "../../types";
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CultureCard } from "../Organisms/Card/CultureCard";
import family from "../../images/family.png";
import market from "../../images/market.png";
import bure from "../../images/Bure.png";
import innovation from "../../images/innovation.png";
import { Link } from "react-router-dom";
import { Footer } from "../Organisms/Footer/Footer";
import { RecomendTest } from "../Organisms/Recomend/RecomendTest";
import { HeadBlock } from "../Blocks/HeadBlock";
import { ArticleCard } from "../Organisms/Card/ArticleCard";
export const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile>();
  const [maxCultureKeys, setMaxCultureKeys] = useState<Array<string>>();
  const [cultureValue, setCultureValue] = useState<CultureValue>({
    family: 0,
    innovation: 0,
    market: 0,
    bure: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/profile`
        );
        setProfile(response.data);
        setCultureValue({
          family: response.data.family,
          Innovation: response.data.Innovation,
          market: response.data.market,
          beuraucracy: response.data.beuraucracy,
        });
      } catch (error: AxiosError | any) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/favorites`,
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        setArticles(response.data);
      } catch (error) {
        // エラーが発生した場合はログに出力するか、必要に応じて処理する
        setArticles(null); // エラー時は記事をnullに設定するか、必要に応じて空の配列などを設定する
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log(cultureValue);
    function findMaxKeys(obj: CultureValue) {
      const max = Math.max(...Object.values(obj));
      return Object.keys(obj).filter((key) => obj[key] === max);
    }
    setMaxCultureKeys(findMaxKeys(cultureValue));
  }, [cultureValue]);
  useEffect(() => {
    console.log(maxCultureKeys);
  }, [maxCultureKeys]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadBlock title="組織文化の診断結果 - きたしる" path="profile" />
      <Header />
      <Tabs>
        <TabList>
          <Tab>
            {" "}
            <p>あなたの組織文化</p>
          </Tab>
          <Tab>いいね</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {error ? (
              <Box p={5}>
                <RecomendTest
                  title="まだ組織診断結果がありません"
                  text="こちらから診断してみてください"
                />
              </Box>
            ) : (
              <Card maxW="800px" mx="auto">
                <CardBody>
                  <Text fontSize={"xl"} fontWeight="600">
                    あなたの組織文化診断結果
                  </Text>
                  {profile !== undefined ? (
                    <CultureChart
                      resultFam={profile.family}
                      resultInno={profile.Innovation}
                      resultMar={profile.market}
                      resultBure={profile.beuraucracy}
                    />
                  ) : null}

                  <Stack mt="6" spacing="3">
                    <Box>
                      <TableContainer>
                        <Table variant="simple">
                          <TableCaption>あなたの組織文化特性</TableCaption>
                          <Thead>
                            <Tr>
                              <Th>組織文化</Th>
                              <Th>あなたの得点</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>家族文化</Td>
                              <Td>{profile?.family}</Td>
                            </Tr>
                            <Tr>
                              <Td>イノベーション文化</Td>
                              <Td>{profile?.Innovation}</Td>
                            </Tr>
                            <Tr>
                              <Td>マーケット文化</Td>
                              <Td>{profile?.market}</Td>
                            </Tr>
                            <Tr>
                              <Td>官僚文化</Td>
                              <Td>{profile?.beuraucracy}</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Stack>
                </CardBody>
                <CardBody>
                  <Text fontWeight="600">あなたの組織文化の特徴は？？</Text>
                  {maxCultureKeys?.map((item) => {
                    let content = null;
                    switch (item) {
                      case "family":
                        content = (
                          <Box mt={20}>
                            <CultureCard
                              imageUrl={family}
                              imageAlt="家族文化の画像"
                              culture="家族文化"
                              descripion="人々が多くのものを共有する非常にフレンドリーな職場。組織は人材が成長することの長期的なメリットを重視し、一体感とやる気を非常に重視する。顧客への心配りと人々への気遣いがあることが組織の成功と定義される。"
                            />
                          </Box>
                        );
                        break;
                      case "market":
                        content = (
                          <Box mt={20}>
                            <CultureCard
                              imageUrl={market}
                              imageAlt="マーケット文化の画像"
                              culture="マーケット文化"
                              descripion="過程ではなく、結果を重視する組織。競争力のある行動や測定可能なゴール・ 目標を達成することが長期的関心事である。競合他社に勝てるような製品・サービス価格の設定や 市場シェアリーダーシップが組織の成功と定義される。"
                            />
                          </Box>
                        );
                        break;
                      case "innovation":
                        content = (
                          <Box mt={20}>
                            <CultureCard
                              imageUrl={innovation}
                              imageAlt="イノベーション文化の画像"
                              culture="イノベーション文化"
                              descripion="ダイナミックであり、起業家精神にあふれクリエイティブな職場。時代の最先端にいることが重視される。組織が長期的に重視するのは成長と新しい資源の獲得である。ユニークかつ新しい商品やサービスを生みだすことが成功を意味する。"
                            />
                          </Box>
                        );
                        break;
                      case "bure":
                        content = (
                          <Box mt={20}>
                            <CultureCard
                              imageUrl={bure}
                              imageAlt="官僚文化の画像"
                              culture="官僚文化"
                              descripion="非常に形式的で構造化された職場。決められた手 順や手続きが人々の活動を規定する。信頼できる製品・サービスの供給、スムーズな日程調整、そして低コストが組織の成功と定義される。"
                            />
                          </Box>
                        );
                        break;
                      default:
                        content = null;
                    }
                    return <>{content}</>;
                  })}
                  {/* <CultureCard></CultureCard> */}
                </CardBody>
                <Divider />

                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link to={"/articles"}>
                      <Button variant="solid" colorScheme="blue">
                        自分に合った企業をみる
                      </Button>
                    </Link>
                    <Link to={"/culture"}>
                      <Button variant="ghost" colorScheme="blue">
                        組織文化を見る
                      </Button>
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            )}
          </TabPanel>
          <TabPanel>
            <Card>
              {articles ? (
                articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    profile={profile}
                  />
                ))
              ) : (
                <Box p={5}>気になる企業はいいねしてみましょう</Box>
              )}
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
