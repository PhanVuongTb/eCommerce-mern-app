import React from "react";
import { Outlet } from "react-router-dom";
import FooterPage from "../components/Web/FooterPage";
import HeaderPage from "../components/Web/HeaderPage";
import { Toaster } from "react-hot-toast";
import "../styles/layoutWeb.css";

const LayoutWeb = () => {
  return (
    <>
      <header>
        <HeaderPage />
      </header>
      <main>
        <Toaster />
        <Outlet />
      </main>
      <footer>
        <FooterPage />
      </footer>
    </>
  );
};

export default LayoutWeb;
