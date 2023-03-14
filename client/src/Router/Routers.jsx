import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Web/HomePage";
import About from "../pages/Web/About";
import Contact from "../pages/Web/Contact";
import Policy from "../pages/Web/Policy";
import Pagenotfound from "../pages/Web/Pagenotfound";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import LayoutWeb from "../Layout/LayoutWeb";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
