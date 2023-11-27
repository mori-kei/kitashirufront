import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

import { CultureCompareChart } from "../../Molecules/Chart/CultureCompareChart";
import { Article, Profile } from "../../../types";
import { Link } from "react-router-dom";
type Props = {
  article: Article;
  profile: Profile;
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
        <Text>紫:企業の組織文化 </Text>
        <Text>緑:あなたの組織文化</Text>
      </Box>

      <Text fontSize="md" mb={4}>
        {article.overview}
      </Text>
      <Text fontSize="md" mb={2}>
        資本金: {article.capital_amount}
      </Text>
      <Text fontSize="md" mb={2}>
        売上: {article.earning_amount}
      </Text>
      <Text fontSize="md" mb={4}>
        従業員数: {article.company_size}
      </Text>
      <Flex justify="space-between">
        <Button colorScheme="blue" size="sm" flexBasis="48%">
          <Link to={`/articles/${article.id}`}>もっと詳しく</Link>
        </Button>

        <Button variant="outline" colorScheme="blue" size="sm" flexBasis="48%">
          <Link to={article.url}>企業HP</Link>
        </Button>
      </Flex>
    </Box>
  );
};
