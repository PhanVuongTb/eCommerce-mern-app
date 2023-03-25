import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import image1 from "../assets/imgs/customer01.jpg";
import "../styles/layoutAdmin.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
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
                <ion-icon name="logo-apple" />
              </span>
              <span className="title">Brand Name</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="people-outline" />
              </span>
              <span className="title">Customers</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline" />
              </span>
              <span className="title">Messages</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="help-outline" />
              </span>
              <span className="title">Help</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="settings-outline" />
              </span>
              <span className="title">Settings</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="lock-closed-outline" />
              </span>
              <span className="title">Password</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <ion-icon name="log-out-outline" />
              </span>
              <span className="title">Sign Out</span>
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
            <Dropdown as={ButtonGroup}>
              <Button variant="success">{auth?.user?.name}</Button>
              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/" className="dropdown-item">
                    Quay lại web
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink
                    onClick={handleLogout}
                    to="/login"
                    className="dropdown-item"
                  >
                    Logout
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
