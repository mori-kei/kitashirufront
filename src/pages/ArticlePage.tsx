import React, { useEffect, useState } from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Article } from "../components/templates/Article";
import { Footer } from "../components/Organisms/Footer/Footer";
import { Profile } from "../types";
import { Article as ArticleType } from "../types";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useFetchArticle } from "../hooks/useFetchArticle"; // カスタムフックのインポート
import useFetchProfile from "../hooks/useFetchProfile";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const article = useFetchArticle(articleId); // カスタムフックの使用
  const profile = useFetchProfile();

  return (
    <>
      <Header />
      {article ? <Article profile={profile} article={article} /> : null}
      <Footer />
    </>
  );
};
