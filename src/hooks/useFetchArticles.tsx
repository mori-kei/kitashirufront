import { useState, useEffect } from "react";
import axios from "axios";
import { Article } from "../types";

const useFetchArticles = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles/match`,
          {
            withCredentials: true,
          },
        );
        console.log(response.data);
        setArticles(response.data);
      } catch (error) {
        // エラーが発生した場合はログに出力するか、必要に応じて処理する
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles/random`,
          {
            withCredentials: true,
          },
        );
        console.error("An error occurred while fetching articles:", error);

        setArticles(response.data); // エラー時は記事をnullに設定するか、必要に応じて空の配列などを設定する
      }
    };

    fetchData();
  }, []);

  return articles; // articlesのみを返す
};

export default useFetchArticles;
