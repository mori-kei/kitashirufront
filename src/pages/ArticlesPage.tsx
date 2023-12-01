import React, { useEffect, useState } from "react";

import { Header } from "../components/Organisms/Header/Header";
import { Article, Profile } from "../types";
import axios, { AxiosError } from "axios";
import { Articles } from "../components/templates/Articles";
import { Footer } from "../components/Organisms/Footer/Footer";
import { RecomendTest } from "../components/Organisms/Recomend/RecomendTest";
import { Box } from "@chakra-ui/react";
export const ArticlesPage = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [articles, setArticles] = useState<Article[]>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/profile`
        );
        setProfile(response.data);
      } catch (error: AxiosError | any) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles`
        );
        setArticles(response.data);
      } catch (error: AxiosError | any) {
        // エラーが発生した場合、別のURLにリクエストを送信する
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/articles/random`
          );
          setArticles(response.data);
        } catch (innerError) {
          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <>
        <Header />
        <Box p={30}>
          <RecomendTest
            title="まだ組織診断結果がありません"
            text="こちらから診断してみてください 診断が完了すると企業があなたの雰囲気に合った順番で表示されます"
          />
        </Box>
        {articles ? <Articles profile={profile} articles={articles} /> : null}

        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      {profile && articles ? (
        <Articles profile={profile} articles={articles} />
      ) : null}

      <Footer />
    </>
  );
};
