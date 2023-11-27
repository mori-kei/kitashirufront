import React, { useEffect, useState } from "react";
import { ArticleCard } from "../components/Organisms/card/ArticleCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "../components/Organisms/Header/Header";
import { Article, Profile } from "../types";
import axios from "axios";
import { Articles } from "../components/templates/Articles";
export const ArticlesPage = () => {
  const [profile, setProfile] = useState<Profile>();
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/profile`).then((response) => {
      setProfile(response.data);
    });
  }, []);
  useEffect(() => {}, []);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/articles`).then((response) => {
      setArticles(response.data);
    });
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      {profile && articles ? (
        <Articles profile={profile} articles={articles} />
      ) : null}
    </>
  );
};
