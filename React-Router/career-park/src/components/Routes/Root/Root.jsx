import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../sharedComponents/Footer/Footer";
import Header from "../../sharedComponents/Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
