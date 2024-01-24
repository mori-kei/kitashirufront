import React from "react";
import { useState } from "react";
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
import { AdminHeader } from "../../components/Organisms/Header/AdminHeader";
import { Footer } from "../../components/Organisms/Footer/Footer";
import { StatusBadge } from "../../components/Atoms/Badge/StatusBadge";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Atoms/Text/Title";

export const ArticleCreatePage = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [overview, setOverview] = useState("");
  const [message, setMessage] = useState("");
  const [appeal, setAppeal] = useState("");
  const [capital_amount, setCapital_amount] = useState(0);
  const [earning_amount, setEarning_amount] = useState(0);
  const [company_size, setCompany_size] = useState(0);
  const [address, setAddress] = useState("");
  const [family_point, setFamily_point] = useState(0);
  const [innovation_point, setInnovation_point] = useState(0);
  const [market_point, setMarket_point] = useState(0);
  const [bure_point, setBure_point] = useState(0);
  const [is_published, setIs_published] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIs_published((prev) => !prev);
  };
  console.log(is_published);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/article`,
        {
          name: name,
          url: url,
          overview: overview,
          message: message,
          appeal: appeal,
          capital_amount: capital_amount,
          earning_amount: earning_amount,
          company_size: company_size,
          address: address,
          family_point: family_point,
          innovation_point: innovation_point,
          market_point: market_point,
          bure_point: bure_point,
          is_published: is_published,
        },
        {
          withCredentials: true,
        },
      );
      console.log("Response:", response.data); // レスポンスをログに出力
      alert("保存されました");
      navigate("/dashboard/articles");
    } catch (error) {
      alert("失敗しました");
    }
  };

  return (
    <>
      <AdminHeader />
      <Box p={30}>
        <Title text="新規作成" fontWeight={"bold"} mb={10} />
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>企業名</FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>企業URL</FormLabel>
            <Input
              type="text"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>主な事業内容</FormLabel>
            <Textarea
              name="overview"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>採用メッセージ</FormLabel>
            <Textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>自社事業の魅力</FormLabel>
            <Textarea
              name="appeal"
              value={appeal}
              onChange={(e) => setAppeal(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>資本金</FormLabel>
            <Input
              type="number"
              name="capital_amount"
              value={capital_amount}
              onChange={(e) => setCapital_amount(parseFloat(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>売上</FormLabel>
            <Input
              type="number"
              name="earning_amount"
              value={earning_amount}
              onChange={(e) => setEarning_amount(parseFloat(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>従業員数</FormLabel>
            <Input
              type="number"
              name="company_size"
              value={company_size}
              onChange={(e) => setCompany_size(parseFloat(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>住所</FormLabel>
            <Input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>家族文化の得点</FormLabel>
            <Input
              type="number"
              name="family_point"
              value={family_point}
              onChange={(e) => setFamily_point(parseFloat(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>イノベーション文化の得点</FormLabel>
            <Input
              type="number"
              name="innovation_point"
              value={innovation_point}
              onChange={(e) => setInnovation_point(parseFloat(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>マーケット文化の得点</FormLabel>
            <Input
              type="number"
              name="market_point"
              value={market_point}
              onChange={(e) => setMarket_point(parseFloat(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>官僚文化の得点</FormLabel>
            <Input
              type="number"
              name="bure_point"
              value={bure_point}
              onChange={(e) => setBure_point(parseFloat(e.target.value))}
            />
          </FormControl>
          <FormControl>
            <FormLabel>記事の表示</FormLabel>

            <Button onClick={handleToggle}>変更</Button>
            <StatusBadge status={is_published} />
          </FormControl>
        </Stack>
        <Button onClick={handleSubmit} mt={20}>
          保存する
        </Button>
      </Box>
      <Footer />
    </>
  );
};
