import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Header } from "../Organisms/Header/Header";

import { ButtonGroup, Button } from "@chakra-ui/button";
import axios from "axios";
import CultureChart from "../Molecules/Chart/CultureChart";
import { CultureValue, Profile } from "../../types";
import { Box } from "@chakra-ui/react";

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
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                自分に合った企業をみる
              </Button>
              <Button variant="ghost" colorScheme="blue">
                組織文化を見る
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </>
  );
};
