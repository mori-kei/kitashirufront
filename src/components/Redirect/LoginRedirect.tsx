import React, { ReactNode, FC } from "react";
import { useAuthContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
// ログインしていない場合アクセスしたページからloginにリダイレクトする
const LoginRedirect: FC<Props> = ({ children }) => {
  const { auth } = useAuthContext();
  if (auth?.user_type === "user") {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default LoginRedirect;
