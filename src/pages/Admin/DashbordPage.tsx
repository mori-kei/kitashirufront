import React from "react";
import { AdminHeader } from "../../components/Organisms/Header/AdminHeader";
import { Footer } from "../../components/Organisms/Footer/Footer";
import { Box } from "@chakra-ui/react";
import { Dashbord } from "../../components/templates/Dashbord";

export const DashbordPage = () => {
  return (
    <>
      <AdminHeader />
      <Dashbord />
      <Footer />
    </>
  );
};
