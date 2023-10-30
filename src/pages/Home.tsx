import React from "react";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { user ,logout} = useAuthContext();
  return (
    <div>
      <h2>Welcome home {user && user.id }</h2>
      <div className="">
        <Link to={"/login"}>login</Link>
        <div onClick={logout}>ログアウト</div>
        <Link to={"/protected"}>protected</Link>
        <Link to={"/test"}>test</Link>
      </div>
    </div>
  );
};

export default Home;
