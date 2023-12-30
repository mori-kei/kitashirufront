import React from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Article } from "../components/templates/Article";
import { Footer } from "../components/Organisms/Footer/Footer";
import { useParams } from "react-router-dom";
import { useFetchArticle } from "../hooks/useFetchArticle"; // カスタムフックのインポート
import useFetchProfile from "../hooks/useFetchProfile";
import { usePageTracking } from "../hooks/useTracking";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const article = useFetchArticle(articleId); // カスタムフックの使用
  const profile = useFetchProfile();
  usePageTracking();
  return (
    <>
      <Header />
      {article ? <Article profile={profile} article={article} /> : null}
      <Footer />
    </>
  );
};
