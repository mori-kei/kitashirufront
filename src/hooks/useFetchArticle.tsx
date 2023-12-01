import { useEffect, useState } from "react";
import axios from "axios";
import { Article } from "../types";

export const useFetchArticle = (articleId: string | undefined) => {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get<Article>(
          `${process.env.REACT_APP_API_URL}/articles/${articleId}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error("記事の取得中にエラーが発生しました:", error);
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  return article;
};
