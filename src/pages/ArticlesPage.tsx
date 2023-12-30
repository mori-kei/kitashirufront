import React, { useEffect, useState } from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Articles } from "../components/templates/Articles";
import { Footer } from "../components/Organisms/Footer/Footer";
import { RecomendTest } from "../components/Organisms/Recomend/RecomendTest";
import { Box } from "@chakra-ui/react";
import useFetchProfile from "../hooks/useFetchProfile";
import useFetchArticles from "../hooks/useFetchArticles";
import { BoxShadow } from "../components/Atoms/Box/BoxShadow";
import { Title } from "../components/Atoms/Text/Title";
import { usePageTracking } from "../hooks/useTracking";

export const ArticlesPage = () => {
  const profile = useFetchProfile(); // profile だけを取得するように変更

  const articles = useFetchArticles();
  usePageTracking();
  return (
    <>
      <Header />
      {articles ? (
        <Articles profile={profile} articles={articles} />
      ) : (
        <BoxShadow>
          <Title text="記事がありません" />
        </BoxShadow>
      )}
      <Footer />
    </>
  );
};
