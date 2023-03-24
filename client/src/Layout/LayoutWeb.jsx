import React from "react";
import { Outlet } from "react-router-dom";
import FooterPage from "../components/Web/FooterPage";
import HeaderPage from "../components/Web/HeaderPage";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../context/auth";
import "../styles/layoutWeb.css";

const LayoutWeb = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <header>
        <HeaderPage />
      </header>
      <main>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
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
