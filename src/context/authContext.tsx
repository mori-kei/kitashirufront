import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios, { AxiosError, AxiosHeaderValue } from "axios";
import { LoginAuth } from "../types";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  auth: LoginAuth | null;
  setAuth: React.Dispatch<React.SetStateAction<LoginAuth | null>>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (
    email: string,
    password: string,
    csrf: AxiosHeaderValue | undefined
  ) => void;
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
      alert(error.response.data.message);
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

  const signup = (
    email: string,
    password: string,
    csrf: AxiosHeaderValue | undefined
  ) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/signup`,
        { email, password },
        {
          headers: {
            "X-CSRF-Token": csrf,
            "Content-Type": "application/json", // 例としてJSONを指定しています
            // 他の必要なヘッダーも追加できます
          },
        }
      )
      .then((response) => {
        login(email, password);
      })
      .catch((error) => {
        alert(error.response.data.message);
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
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError; // TypeScriptの型推論を助けるためにキャスト
        if (err.response) {
          // サーバーからのレスポンスはあるが、レスポンスがエラー状態の場合
          console.log("Server Error:", err.response.data);
        } else if (err.request) {
          // サーバーへのリクエストが行われなかった場合
          console.log("Request Error:", err.request);
        } else {
          // その他のエラー
          console.log("Error:", err.message);
        }
      } else {
        console.log("Error:", error.message); // AxiosError型以外のエラーの処理
      }
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
