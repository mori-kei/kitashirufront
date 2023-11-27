import React from "react";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import { Header } from "../components/Organisms/Header/Header";
const Home = () => {
  const { auth, logout } = useAuthContext();
  return (
    <div>
      <Header />
      <h2>Welcome home {auth && auth.id}</h2>
      <div className="">
        <Link to={"/login"}>login</Link>
        <div onClick={logout}>ログアウト</div>
        <Link to={"/protected"}>protected</Link>
        <Link to={"/test"}>test</Link>
        <div className="">
          <Link to={"/modal"}>modal</Link>
        </div>
        <div className="">
          <Link to={"/footer"}>Footer</Link>
        </div>
        <div className="">
          <Link to={"/showmodal"}>開いているmodal</Link>
        </div>
        <div className="">
          <Link to={"/profile"}>プロフィール</Link>
        </div>
        <div className="">
          <Link to={"/articles"}>企業一覧</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
