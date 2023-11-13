import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Protected from "./pages/Protected";
import axios from "axios";
import { CsrfToken } from "./types";
import LoginRedirect from "./components/LoginRedirect";
import ProtectedRedirect from "./components/ProtectedRedirect";
import SignUp from "./pages/Signup";
import Culturetest from "./components/templates/Culturetest";
import { Header } from "./components/Organisms/Header/Header";
import "./CSS/chart.css";
import { NomalModal } from "./components/Organisms/Modal/NomalModal";
import { Footer } from "./components/Organisms/Footer/Footer";
import { FirstShowModal } from "./components/Organisms/Modal/FirstShowModal";

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
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route
          path="/login"
          element={
            <LoginRedirect>
              <Login />
            </LoginRedirect>
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
          path="/protected"
          element={
            <ProtectedRedirect>
              <Protected />
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
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/modal"
          element={
            <NomalModal
              title="this is modal"
              openText="open"
              closeText="close"
              secondlyActionText="action"
              size="full"
              children={<> これはチルドレンです</>}
              onClick={() => {}}
              buttonWidth="full"
            />
          }
        />
        <Route
          path="/showmodal"
          element={
            <FirstShowModal
              title="this is modal"
              openText="open"
              closeText="close"
              secondlyActionText="action"
              size="full"
              children={<> これはチルドレンです</>}
              onClick={() => {}}
              buttonWidth="full"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
