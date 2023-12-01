import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import axios from "axios";
import { CsrfToken } from "./types";
import LoginRedirect from "./components/Redirect/LoginRedirect";
import ProtectedRedirect from "./components/Redirect/ProtectedRedirect";
import SignUp from "./pages/Signup";
import Culturetest from "./components/templates/Culturetest";
import "./CSS/chart.css";

import { ProfilePage } from "./components/templates/Profile";
import { AdminLogin } from "./pages/AdminLogin";
import AuthRedirect from "./components/Redirect/AdminLoginRedirect";
import { ArticlesPage } from "./pages/ArticlesPage";
import { CulturePage } from "./pages/CulturePage";
import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/HomePage";

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    const getCsrfToken = async () => {
      const { data } = await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrf`
      );
      axios.defaults.headers.common["X-CSRF-Token"] = data.csrf_token;
    };
    getCsrfToken();
  }, []);
  const [isReady, setIsReady] = useState(false); // レンダリングの準備が完了したかどうかの状態

  useEffect(() => {
    const checkIsLogin = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth`, {
          withCredentials: true,
        });
        // 認証データをセットする（例：setAuth(res.data)）
        // リダイレクトなどの処理を行う

        // レンダリングの準備が完了したことを示す状態を更新
        setIsReady(true);
      } catch (error) {
        setIsReady(true);
      }
    };

    checkIsLogin();
  }, []);

  if (!isReady) {
    // レンダリングの準備が完了するまでローディングや他のコンテンツを表示
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin/login"
          element={
            <AuthRedirect>
              <AdminLogin />
            </AuthRedirect>
          }
        />
        <Route
          path="/login"
          element={
            <LoginRedirect>
              <Login />
            </LoginRedirect>
          }
        />
        <Route
          path="/articles"
          element={
            <ProtectedRedirect>
              <ArticlesPage />
            </ProtectedRedirect>
          }
        />
        <Route
          path="/articles/:articleId"
          element={
            <ProtectedRedirect>
              <ArticlePage />
            </ProtectedRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <LoginRedirect>
              <SignUp />
            </LoginRedirect>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRedirect>
              <ProfilePage />
            </ProtectedRedirect>
          }
        />
        <Route
          path="/test"
          element={
            <ProtectedRedirect>
              <Culturetest />
            </ProtectedRedirect>
          }
        />

        <Route path="/culture" element={<CulturePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
