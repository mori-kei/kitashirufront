import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { ArticleCard } from "../Organisms/card/ArticleCard";
import { Article, Profile } from "../../types";

type Props = {
  profile: Profile;
  articles: Article[];
};
export const Articles = ({ profile, articles }: Props) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // SPでは1列、PCでは最大2列
      gap={4} // コンポーネント間の間隔
    >
      {articles.map((article) => (
        <GridItem colSpan={1}>
          <ArticleCard key={article.id} article={article} profile={profile} />
        </GridItem>
      ))}
      {/* <GridItem colSpan={1}>
        <ArticleCard />
      </GridItem>
      <GridItem colSpan={1}>
        <ArticleCard />
      </GridItem>
      <GridItem colSpan={1}>
        <ArticleCard />
      </GridItem>
      <GridItem colSpan={1}>
        <ArticleCard />
      </GridItem> */}
    </Grid>
  );
};
