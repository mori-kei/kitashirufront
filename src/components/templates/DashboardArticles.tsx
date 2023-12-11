import React from "react";

import { Link } from "react-router-dom";

import { ArticleStatusCard } from "../Organisms/Card/ArticleStatusCard";
import { Article } from "../../types";
import { Box } from "@chakra-ui/react";
type Props = {
  articles: Article[];
};
export const DashboardArticles = ({ articles }: Props) => {
  return (
    <Box p={30}>
      {articles.map((article) => (
        <Link to={`/dashboard/articles/${article.id}`}>
          <Box mt={5}>
            <ArticleStatusCard
              name={article.name}
              status={article.is_published}
            />
          </Box>
        </Link>
      ))}
    </Box>
  );
};
