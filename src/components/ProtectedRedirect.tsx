import React, { ReactNode,FC } from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

interface Props {
  children:ReactNode
}

const ProtectedRedirect:FC<Props> = ({children}) => {
  const { user } = useAuthContext();
  if(!user) {
    return <Navigate to={'/login'} />
  }else{
    return <>{children}</>
  }
  
};

export default ProtectedRedirect;
