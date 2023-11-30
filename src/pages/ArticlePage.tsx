import React, { useEffect, useState } from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Article } from "../components/templates/Article";
import { Footer } from "../components/Organisms/Footer/Footer";
import { Profile } from "../types";
import { Article as ArticleType } from "../types";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ArticlePage = () => {
  const [profile, setProfile] = useState<Profile>({
    id: 0,
    beuraucracy: 0,
    family: 0,
    Innovation: 0,
    market: 0,
    created_at: new Date(),
    updated_at: new Date(),
  });
  const [article, setArticle] = useState<ArticleType>({
    id: 1,
    name: "Sample Company",
    url: null,
    overview: "This is a sample company overview.",
    message: "Welcome to Sample Company!",
    appeal: "We offer innovative solutions.",
    capital_amount: 1000000,
    earning_amount: 500000,
    company_size: 50,
    address: "123 Sample St, Sample City",
    is_published: true,
    family_point: 8,
    innovation_point: 9,
    market_point: 7,
    bure_point: 6,
    created_at: "2023-11-30T12:00:00",
    updated_at: "2023-11-30T12:00:00",
  });
  const { articleId } = useParams();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/profile`).then((response) => {
      setProfile(response.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/articles/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      });
  }, []);
  console.log(article);
  return (
    <>
      <Header />

      <Article profile={profile} article={article} />

      <Footer />
    </>
  );
};
