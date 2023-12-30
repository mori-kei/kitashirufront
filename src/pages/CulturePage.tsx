import React from "react";
import { Header } from "../components/Organisms/Header/Header";
import { Culture } from "../components/templates/Culture";
import { Footer } from "../components/Organisms/Footer/Footer";
import { usePageTracking } from "../hooks/useTracking";
import { HeadBlock } from "../components/Blocks/HeadBlock";

export const CulturePage = () => {
  usePageTracking();
  return (
    <>
      <HeadBlock
        title="組織文化(企業の雰囲気)について - きたしる"
        description="きたしるで組織文化(企業の雰囲気)について説明します"
        path="culture"
      />
      <Header />
      <Culture />
      <Footer />
    </>
  );
};
