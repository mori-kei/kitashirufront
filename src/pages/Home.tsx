import React from "react";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { user ,logout} = useAuthContext();
  console.log(user);
  return (
    <div>
      <h2>Welcome home {user && user.id}</h2>
      <div className="">
        <Link to={"/login"}>login</Link>
        <div onClick={logout}>ログアウト</div>
        <Link to={"/protected"}>protected</Link>
      </div>
    </div>
  );
};

export default Home;
