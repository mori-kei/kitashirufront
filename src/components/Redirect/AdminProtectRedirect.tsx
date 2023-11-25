import React, { ReactNode, FC } from "react";
import { useAuthContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const AdminProtectedRedirect: FC<Props> = ({ children }) => {
  const { auth } = useAuthContext();
  if (auth?.user_type === "admin") {
    return <>{children}</>;
  } else {
    return <Navigate to={"/admin/login"} />;
  }
};
