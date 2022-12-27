import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// components
import Header from "./Header";
import Footer from "./Footer";

function GeneralLayout() {
  return (
    <>
      <Header />
      <ScrollToTop smooth color="#fff" />
      <Outlet />
      <Footer />
    </>
  );
}

export default GeneralLayout;
