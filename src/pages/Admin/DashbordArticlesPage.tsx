import React, { useEffect, useState } from "react";
import { AdminHeader } from "../../components/Organisms/Header/AdminHeader";
import { Footer } from "../../components/Organisms/Footer/Footer";
import { DashboardArticles } from "../../components/templates/DashboardArticles";
import { Article } from "../../types";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const DashboardArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>();
  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const response = await axios.get<Article[]>(
          `${process.env.REACT_APP_API_URL}/articles/all`,
        );
        setArticles(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("記事の取得中にエラーが発生しました:", error);
      }
    };
    fetchAllArticles();
  }, []);

  return (
    <>
      <AdminHeader />
      <Box p={30} pb={0}>
        <Link to="/dashboard/articles/create">
          <Button colorScheme="teal" variant="outline">
            新規追加 <AddIcon ml={3} />
          </Button>
        </Link>
      </Box>
      {articles ? <DashboardArticles articles={articles} /> : null}

      <Footer />
    </>
  );
};
