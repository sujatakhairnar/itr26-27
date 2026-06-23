import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;