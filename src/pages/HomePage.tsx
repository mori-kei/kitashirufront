import React from "react";

import { Header } from "../components/Organisms/Header/Header";
import { Footer } from "../components/Organisms/Footer/Footer";
import { Home } from "../components/templates/Home";
export const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
