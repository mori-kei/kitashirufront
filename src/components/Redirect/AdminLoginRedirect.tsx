import React, { ReactNode, FC } from "react";
import { useAuthContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const AuthRedirect: FC<Props> = ({ children }) => {
  const { auth } = useAuthContext();
  if (auth?.user_type === "admin") {
    return <Navigate to={"/"} />;
  } else {
    return <>{children}</>;
  }
};

export default AuthRedirect;
