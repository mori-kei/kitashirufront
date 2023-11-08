import React from "react";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import { Header } from "../components/organisms/Header/Header";
const Home = () => {
  const { user ,logout} = useAuthContext();
  return (
    <div>
      <Header />
      <h2>Welcome home {user && user.id }</h2>
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
      </div>
    </div>
  );
};

export default Home;
