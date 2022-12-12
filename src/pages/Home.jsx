//rafce
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
