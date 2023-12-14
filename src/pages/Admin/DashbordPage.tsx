import React from "react";
import { AdminHeader } from "../../components/Organisms/Header/AdminHeader";
import { Footer } from "../../components/Organisms/Footer/Footer";

import { Dashboard } from "../../components/templates/Dashbord";

export const DashboardPage = () => {
  return (
    <>
      <AdminHeader />
      <Dashboard />
      <Footer />
    </>
  );
};
