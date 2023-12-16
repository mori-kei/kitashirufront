import React, { FC, ReactNode } from "react";
import { useAuthContext } from "../../../context/authContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
export const AdminProtect: FC<Props> = ({ children }) => {
  const { auth } = useAuthContext();

  if (auth?.user_type === "admin") {
    return <>{children}</>; 
  } else {
    return <Navigate to={"/"} />;
  }
};
