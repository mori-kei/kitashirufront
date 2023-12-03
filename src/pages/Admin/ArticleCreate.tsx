import React from "react";
import { useState } from "react";
import { Article, SendArticle } from "../../types";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const ArticleCreate = () => {
  const [article, setArticle] = useState<SendArticle>({
    name: "",
    url: null,
    overview: "",
    message: "",
    appeal: "",
    capital_amount: 0,
    earning_amount: 0,
    company_size: 0,
    address: "",
    is_published: true,
    family_point: 0,
    innovation_point: 0,
    market_point: 0,
    bure_point: 0,
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/article`,
        article,
        {
          withCredentials: true,
        }
      );
      console.log("Response:", response.data); // レスポンスをログに出力
      alert("保存されました");
    } catch (error) {
      alert("失敗しました");
    }
  };

  console.log(article);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };
  return (
    <>
      <Box p={30}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>企業名</FormLabel>
            <Input
              type="text"
              name="name"
              value={article.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>企業URL</FormLabel>
            <Input
              type="text"
              name="url"
              value={article.url || ""}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>主な事業内容</FormLabel>
            <Textarea
              name="overview"
              value={article.overview}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>採用メッセージ</FormLabel>
            <Textarea
              name="message"
              value={article.message}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>自社事業の魅力</FormLabel>
            <Textarea
              name="appeal"
              value={article.appeal}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>資本金</FormLabel>
            <Input
              type="number"
              name="capital_amount"
              value={article.capital_amount}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>売上</FormLabel>
            <Input
              type="number"
              name="earning_amount"
              value={article.earning_amount}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>従業員数</FormLabel>
            <Input
              type="number"
              name="company_size"
              value={article.company_size}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>住所</FormLabel>
            <Input
              type="text"
              name="address"
              value={article.address}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>家族文化の得点</FormLabel>
            <Input
              type="number"
              name="family_point"
              value={article.family_point}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>イノベーション文化の得点</FormLabel>
            <Input
              type="number"
              name="innovation_point"
              value={article.innovation_point}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>マーケット文化の得点</FormLabel>
            <Input
              type="number"
              name="market_point"
              value={article.market_point}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>官僚文化の得点</FormLabel>
            <Input
              type="number"
              name="bure_point"
              value={article.bure_point}
              onChange={handleChange}
            />
          </FormControl>
        </Stack>
        <Button onClick={handleSubmit}>送信</Button>
      </Box>
    </>
  );
};
