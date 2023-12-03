import React, { ReactNode, FC } from "react";
import { useAuthContext } from "../../../context/authContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
//ログインしている場合、ダッシュボードへ遷移させる
export const AdminDashbordRedirect: FC<Props> = ({ children }) => {
  const { auth } = useAuthContext();
  if (auth?.user_type === "admin") {
    return <Navigate to={"/admin/dashbord"} />;
  } else {
    return <>{children}</>;
  }
};
