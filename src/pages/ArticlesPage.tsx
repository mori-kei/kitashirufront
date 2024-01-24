import React from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Articles } from "../components/templates/Articles";
import { Footer } from "../components/Organisms/Footer/Footer";
import useFetchProfile from "../hooks/useFetchProfile";
import useFetchArticles from "../hooks/useFetchArticles";
import { BoxShadow } from "../components/Atoms/Box/BoxShadow";
import { Title } from "../components/Atoms/Text/Title";
import { usePageTracking } from "../hooks/useTracking";
import { HeadBlock } from "../components/Blocks/HeadBlock";

export const ArticlesPage = () => {
  const profile = useFetchProfile(); // profile だけを取得するように変更

  const articles = useFetchArticles();
  usePageTracking();
  return (
    <>
      <HeadBlock
        title="きたしる - 道内就活 雰囲気で企業と学生をマッチング"
        description="きたしるは、雰囲気によって自分に合った道内企業が分かる就活サービスです"
        path="articles"
      />
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
