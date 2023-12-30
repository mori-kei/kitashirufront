import React from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Culture } from "../components/templates/Culture";
import { Footer } from "../components/Organisms/Footer/Footer";
import { usePageTracking } from "../hooks/useTracking";

export const CulturePage = () => {
  usePageTracking()
  return (
    <>
      <Header />
      <Culture />
      <Footer />
    </>
  );
};
