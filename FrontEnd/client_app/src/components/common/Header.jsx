import { Link } from "react-router-dom";
import "../../css/Custom_style.css";
const AidlineLogo = "/images/1a.png";
import NotificationIcon from "./NotificationIcon";

const Header = () => {
  const userEmail = localStorage.getItem("key");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm px-3 rounded-bottom"
      style={{
        background: "linear-gradient(90deg, #005f73, #0a9396)", // modern teal-blue gradient
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ userSelect: "none" }}
        >
          <img
            src={AidlineLogo}
            alt="Logo"
            className="me-2 logo-responsive"
            style={{ borderRadius: "12px" }}
          />
          <span className="fw-bold text-light fs-5 header-glow">Aid Line</span>
        </Link>

        <button
          className="navbar-toggler border-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <Link className="nav-link text-light nav-link-hover" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light nav-link-hover"
                to="/viewnotice"
              >
                Notice
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light nav-link-hover"
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light nav-link-hover"
                to="/Contact"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-light nav-link-hover"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Register
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark bg-gradient">
                <li>
                  <Link
                    className="dropdown-item text-info dropdown-item-hover"
                    to="/userRegister"
                  >
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-info dropdown-item-hover"
                    to="/ownerRegister"
                  >
                    Owner
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-light nav-link-hover"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark bg-gradient">
                <li>
                  <Link
                    className="dropdown-item text-info dropdown-item-hover"
                    to="/userlogin"
                  >
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-info dropdown-item-hover"
                    to="/ownerlogin"
                  >
                    Owner
                  </Link>
                </li>
              </ul>
            </li>
            <div style={{ position: "relative" }}>
              <NotificationIcon userEmail={userEmail} type="user" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
