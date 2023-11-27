import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { LoginAuth } from "../types";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  auth: LoginAuth | null;
  setAuth: React.Dispatch<React.SetStateAction<LoginAuth | null>>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string) => void;
  adminLogin: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<LoginAuth | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password },
        { withCredentials: true }
      );
      // データをuserにセットする
      setAuth(res.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  const adminLogin = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/login`,
        { email, password },
        { withCredentials: true }
      );
      // データをauthにセットする
      setAuth(res.data);
      console.log("succsess!");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  const signup = (email: string, password: string) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/signup`, { email, password })
      .then((response) => {
        login(email, password);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  const checkIsLogin = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth`, {
        withCredentials: true,
      });
      // データをuserにセットする
      setAuth(res.data);
    } catch (error: any) {
      console.log(error.response.data);
      setAuth(null);
    }
  };

  useEffect(() => {
    checkIsLogin();
  }, []);
  const logout = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {
        withCredentials: true,
      });
      // データをuserにセットする
      setAuth(null);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, login, logout, signup, adminLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
