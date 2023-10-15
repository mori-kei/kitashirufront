import React from "react";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { user} = useAuthContext();
  console.log(user);
  return (
    <div>
      <h2>Welcome home {user && user.id}</h2>
      <div className="">
        <Link to={"/login"}>login</Link>
        <div></div>
        <Link to={"/protected"}>protected</Link>
      </div>
    </div>
  );
};

export default Home;
