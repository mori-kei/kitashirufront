import React from "react";
import { AdminHeader } from "../../components/Organisms/Header/AdminHeader";
import { Footer } from "../../components/Organisms/Footer/Footer";
import useFetchArticles from "../../hooks/useFetchArticles";

export const DashbordArticlesPage = () => {
  const articles = useFetchArticles();
  console.log(articles);
  return (
    <>
      <AdminHeader />

      <Footer />
    </>
  );
};
