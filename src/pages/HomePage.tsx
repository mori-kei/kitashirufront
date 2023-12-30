import React from "react";

import { Header } from "../components/Organisms/Header/Header";
import { Footer } from "../components/Organisms/Footer/Footer";
import { Home } from "../components/templates/Home";
import { usePageTracking } from "../hooks/useTracking";
export const HomePage = () => {
  usePageTracking();
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
