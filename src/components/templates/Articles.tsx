import {
  Box,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ArticleCard } from "../Organisms/Card/ArticleCard";
import { Article, Profile } from "../../types";
import { Sidebar } from "../Organisms/Sidebar/Sidebar";
import { RecomendTest } from "../Organisms/Recomend/RecomendTest";
import { BoxShadow } from "../Atoms/Box/BoxShadow";

type Props = {
  profile: Profile | null;
  articles: Article[];
};
export const Articles = ({ profile, articles }: Props) => {
  const displaySidebar = useBreakpointValue({ base: "none", lg: "block" }); // lgブレークポイントで表示
  return (
    <>
      {profile ? (
        <Box p={30}>
          <BoxShadow>
            <Text>あなたに合った企業の順番で表示しています</Text>
          </BoxShadow>
        </Box>
      ) : (
        <Box p={30}>
          <RecomendTest title="組織診断をするとあなたに合った順番で企業が表示されるようになります" />
        </Box>
      )}

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
    </>
  );
};
