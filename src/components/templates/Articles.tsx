import {
  Box,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { ArticleCard } from "../Organisms/card/ArticleCard";
import { Article, Profile } from "../../types";
import { Sidebar } from "../Organisms/Sidebar/Sidebar";

type Props = {
  profile: Profile;
  articles: Article[];
};
export const Articles = ({ profile, articles }: Props) => {
  const displaySidebar = useBreakpointValue({ base: "none", lg: "block" }); // lgブレークポイントで表示
  return (
    <Flex justifyContent={"space-between"} p={30} pt={0}>
      {displaySidebar && (
        <Box w={{ base: "0", lg: "25%" }}>
          <Sidebar />
        </Box>
      )}
      <Box w={{ base: "100%", lg: "70%" }}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // SPでは1列、PCでは最大2列
          gap={4} // コンポーネント間の間隔
        >
          {articles.map((article) => (
            <GridItem colSpan={1}>
              <ArticleCard
                key={article.id}
                article={article}
                profile={profile}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
