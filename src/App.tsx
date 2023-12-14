import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import axios from "axios";
import { CsrfToken } from "./types";
import TopRedirect from "./components/Redirect/TopRedirect";
import LoginRedirect from "./components/Redirect/LoginRedirect";
import SignUp from "./pages/Signup";
import Culturetest from "./components/templates/Culturetest";
import "./CSS/chart.css";

import { ProfilePage } from "./components/templates/Profile";
import { AdminLogin } from "./pages/Admin/AdminLogin";

import { ArticlesPage } from "./pages/ArticlesPage";
import { CulturePage } from "./pages/CulturePage";
import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/HomePage";
import { ArticleRedirect } from "./components/Redirect/ArticleRedirect";
import { AdminDashboardRedirect } from "./components/Redirect/Admin/AdminDashbordRedirect";
import { DashboardPage } from "./pages/Admin/DashbordPage";
import {  ArticleCreatePage } from "./pages/Admin/ArticleCreatePage";
import { DashboardArticlesPage } from "./pages/Admin/DashbordArticlesPage";
import { ArticleEditPage } from "./pages/Admin/ArticleEditPage";

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    const getCsrfToken = async () => {
      const { data } = await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrf`,
        {
          withCredentials: true,
        }
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
        <Route
          path="/"
          element={
            <ArticleRedirect>
              <HomePage />
            </ArticleRedirect>
          }
        />
        <Route
          path="/admin/login"
          element={
            <AdminDashboardRedirect>
              <AdminLogin />
            </AdminDashboardRedirect>
          }
        />
        <Route path="/dashboard/articles/create" element={<ArticleCreatePage  />} />
        <Route path="/dashboard/articles/:articleId" element={<ArticleEditPage  />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/articles" element={<DashboardArticlesPage />} />
        <Route
          path="/login"
          element={
            <TopRedirect>
              <Login />
            </TopRedirect>
          }
        />
        <Route
          path="/articles"
          element={
            <LoginRedirect>
              <ArticlesPage />
            </LoginRedirect>
          }
        />
        <Route
          path="/articles/:articleId"
          element={
            <LoginRedirect>
              <ArticlePage />
            </LoginRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <TopRedirect>
              <SignUp />
            </TopRedirect>
          }
        />

        <Route
          path="/profile"
          element={
            <LoginRedirect>
              <ProfilePage />
            </LoginRedirect>
          }
        />
        <Route
          path="/test"
          element={
            <LoginRedirect>
              <Culturetest />
            </LoginRedirect>
          }
        />

        <Route path="/culture" element={<CulturePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
