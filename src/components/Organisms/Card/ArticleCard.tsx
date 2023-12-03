import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

import { CultureCompareChart } from "../../Molecules/Chart/CultureCompareChart";
import { Article, Profile } from "../../../types";
import { ExternalLinkBotton } from "../../Atoms/Button/ExternalLinkBotton";
import { InternalLinkButton } from "../../Atoms/Button/InternalLinkButton";
import CultureChart from "../../Molecules/Chart/CultureChart";
type Props = {
  article: Article;
  profile: Profile | null;
};
export const ArticleCard = ({ article, profile }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="0 0 8px rgba(0,0,0,0.1)"
      bg="white"
      p={6}
      maxW="800px"
      mx="auto"
    >
      <Heading as="h2" size="md" mb={3}>
        {article.name}
      </Heading>
      <Box textAlign={"center"} mb={50}>
        {profile && article ? (
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
        ) : (
          <CultureChart
            resultFam={article.family_point}
            resultInno={article.innovation_point}
            resultMar={article.market_point}
            resultBure={article.bure_point}
          />
        )}

        <Flex justifyContent={"space-around"} mt={-30}>
          <Flex alignItems={"center"}>
            <Box bgColor="#82ca9d" w={3} h={3}></Box>
            <Text>企業 </Text>
          </Flex>
          {profile ? (
            <Flex alignItems={"center"}>
              <Box bgColor=" #8884d8 " w={3} h={3}></Box>
              <Text>あなた </Text>
            </Flex>
          ) : null}
        </Flex>
      </Box>

      <Text fontSize="md" mb={4} color={"blackAlpha.700"}>
        {article.overview}
      </Text>
      <Text fontSize="md" mb={2} color="rgba(0, 0, 0, 0.56)">
        資本金: {article.capital_amount}
      </Text>
      <Text fontSize="md" mb={2} color="rgba(0, 0, 0, 0.56)">
        売上: {article.earning_amount}
      </Text>
      <Text fontSize="md" mb={4} color="rgba(0, 0, 0, 0.56)">
        従業員数: {article.company_size}
      </Text>
      <Flex justify="space-between">
        <InternalLinkButton
          to={`/articles/${article.id}`}
          label="もっと詳しく"
        />
        {article.url ? (
          <ExternalLinkBotton to={article.url} label="企業HP" />
        ) : null}
      </Flex>
    </Box>
  );
};
