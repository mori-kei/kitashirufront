import React, { ReactNode, FC } from "react";
import { useAuthContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
// ログインしている場合ログインページからトップページへリダイレクト
const TopRedirect: FC<Props> = ({ children }) => {
  const { auth } = useAuthContext();
  if (auth?.user_type === "user") {
    return <Navigate to={"/"} />;
  } else {
    return <>{children}</>;
  }
};

export default TopRedirect;
