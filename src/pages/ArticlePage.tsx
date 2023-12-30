import React from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Article } from "../components/templates/Article";
import { Footer } from "../components/Organisms/Footer/Footer";
import { useParams } from "react-router-dom";
import { useFetchArticle } from "../hooks/useFetchArticle"; // カスタムフックのインポート
import useFetchProfile from "../hooks/useFetchProfile";
import { usePageTracking } from "../hooks/useTracking";
import { HeadBlock } from "../components/Blocks/HeadBlock";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const article = useFetchArticle(articleId); // カスタムフックの使用
  const profile = useFetchProfile();
  usePageTracking();
  return (
    <>
      <HeadBlock
        title={`${article?.name} - きたしる`}
        description={`${article?.name} の採用情報。きたしるでは、企業の雰囲気（組織文化）に基づいてマッチングします。`}
        path={`articles/${article?.id}`}
      />
      <Header />
      {article ? <Article profile={profile} article={article} /> : null}
      <Footer />
    </>
  );
};
