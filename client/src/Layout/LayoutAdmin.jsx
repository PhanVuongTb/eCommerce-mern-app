import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Image } from "react-bootstrap";
import image1 from "../assets/imgs/customer01.jpg";
import "../styles/layoutAdmin.css";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

const LayoutAdmin = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <div className="container-fluid">
      <div className="navigation">
        <ul>
          <li>
            <Link href="#">
              <span className="icon">
                {/* <ion-icon name="logo-apple" /> */}
              </span>
              <span className="title">Ecommerce</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <Link to="/admin" className="title">
                Dashboard
              </Link>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="people-outline" />
              </span>
              <span className="title">User</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/category">
              <span className="icon">
                {/* <ion-icon name="chatbubble-outline" /> */}
              </span>
              <span className="title">Category</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <span className="icon">
                {/* <ion-icon name="help-outline" /> */}
              </span>
              <span className="title">Products</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <ion-icon name="settings-outline" />
              </span>
              <span className="title">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <ion-icon name="lock-closed-outline" />
              </span>
              <span className="title">Password</span>
            </Link>
          </li>
          <li>
            <Link onClick={handleLogout} to="/login">
              <span className="icon">
                <ion-icon name="log-out-outline" />
              </span>
              <span className="title">Sign Out</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <ion-icon name="arrow-back-circle-outline" />
              </span>
              <span className="title">Quay lại Web</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* ========================= Main ==================== */}
      <div className="main">
        <div className="topbar">
          {/* <div className="toggle">
            <ion-icon name="menu-outline" />
          </div> */}
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline" />
            </label>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="user">
              <Image src={image1} />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
