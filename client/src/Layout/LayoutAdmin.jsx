import React from "react";
// import FooterPage from "../components/Admin/FooterPage";
// import HeaderPage from "../components/Admin/HeaderPage";
import { Link, Outlet } from "react-router-dom";
import { Image } from "react-bootstrap";
import image1 from "../assets/imgs/customer01.jpg";
import "../styles/layoutAdmin.css";
// import Navbar from "../components/Admin/Navbar";

const LayoutAdmin = () => {
  return (
    // <div className="container-fluid">
    //   <div>
    //     <Navbar />
    //   </div>
    //   <main className="main">
    //     <header>
    //       <HeaderPage />
    //     </header>
    //     <Outlet />
    //   </main>
    //   <footer>
    //     <FooterPage />
    //   </footer>
    // </div>
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
          <div className="user">
            <Image src={image1} />
          </div>

          <div className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Douglas McGee
              </span>
              <Image
                className="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              />
            </Link>
            {/*  <!-- Dropdown - User Information --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <Link className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </Link>
              <Link className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </Link>
              <Link className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
