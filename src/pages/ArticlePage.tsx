import React from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Article } from "../components/templates/Article";
import { Footer } from "../components/Organisms/Footer/Footer";

export const ArticlePage = () => {
  return (
    <>
      <Header />
      <Article />
      <Footer />
    </>
  );
};
