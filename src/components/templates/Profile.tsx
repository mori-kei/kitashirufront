import { Divider, Flex, Stack, Text } from "@chakra-ui/layout";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Header } from "../Organisms/Header/Header";

import { ButtonGroup, Button } from "@chakra-ui/button";
import axios from "axios";
import CultureChart from "../Molecules/Chart/CultureChart";
import { CultureValue, Profile } from "../../types";
import { Box } from "@chakra-ui/react";
import { CultureCard } from "../Organisms/card/CultureCard";
import family from "../../images/family.png";
import market from "../../images/market.png";
import bure from "../../images/Bure.png";
import innovation from "../../images/innovation.png";
import { Link } from "react-router-dom";
export const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile>();
  const [maxCultureKeys, setMaxCultureKeys] = useState<Array<string>>();
  const [cultureValue, setCultureValue] = useState<CultureValue>({
    family: 0,
    innovation: 0,
    market: 0,
    bure: 0,
  });
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/profile`).then((response) => {
      setProfile(response.data);
      // console.log(profile);
      setCultureValue({
        family: response.data.family,
        innovation: response.data.Innovation,
        market: response.data.market,
        bure: response.data.beuraucracy,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <>
      <Header />
      <Flex justify="center" align="center">
        <Card maxW="md">
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
                <Text>各組織文化の得点</Text>
                <Text>
                  家族:{profile?.family}イノベーション:
                  {profile?.Innovation}マーケット{profile?.market}官僚:
                  {profile?.beuraucracy}
                </Text>
              </Box>
              <Box>
                <Text>最も高いのは</Text>
                <Text>
                  {maxCultureKeys?.map((item) => {
                    let displayText = "";
                    switch (item) {
                      case "family":
                        displayText = "家族文化";
                        break;
                      case "market":
                        displayText = "マーケット文化";
                        break;
                      case "innovation":
                        displayText = "イノベーション文化";
                        break;
                      case "bure":
                        displayText = "官僚文化";
                        break;
                      default:
                        displayText = "";
                    }
                    return <div key={item}>{displayText}</div>;
                  })}
                </Text>
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
      </Flex>
    </>
  );
};
