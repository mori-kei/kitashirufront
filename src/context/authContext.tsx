import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { LoginUser } from "../types";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  user: LoginUser | null;
  setUser: React.Dispatch<React.SetStateAction<LoginUser | null>>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string) => void;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<LoginUser | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password },
        { withCredentials: true }
      );
      // データをuserにセットする
      setUser(res.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  const signup = (email: string, password: string) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/signup`, { email, password }).then(response => {
        login(email,password)
      }
      )
      .catch((error) => {
        console.error("Error", error);
      });
  };
  const checkIsLogin = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
        withCredentials: true,
      });
      // データをuserにセットする
      setUser(res.data);
    } catch (error: any) {
      console.log(error.response.data);
      setUser(null);
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
      setUser(null);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout,signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
