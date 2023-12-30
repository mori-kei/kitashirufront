import React from "react";

import { Header } from "../components/Organisms/Header/Header";
import { Footer } from "../components/Organisms/Footer/Footer";
import { Home } from "../components/templates/Home";
import { usePageTracking } from "../hooks/useTracking";
import { HeadBlock } from "../components/Blocks/HeadBlock";
export const HomePage = () => {
  usePageTracking();
  return (
    <>
      <HeadBlock />
      <Header />
      <Home />
      <Footer />
    </>
  );
};
