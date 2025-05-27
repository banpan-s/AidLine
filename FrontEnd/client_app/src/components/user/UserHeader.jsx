import { Link, useNavigate } from "react-router-dom";
import "./../../css/Userheader.css";
import NotificationIcon from "../common/NotificationIcon";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    const tokenEmail = localStorage.getItem("key");
    if (!tokenEmail) {
      navigate("/userlogin");
    } else {
      localStorage.removeItem("key");
      navigate("/userlogin");
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-primary shadow-sm fixed-top">
        <div className="container-fluid d-flex justify-content-between">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mx-auto fw-semibold fs-4 text-light">
            <i className="fas fa-user-circle me-2"></i> MyApp
          </span>
          <div style={{ position: 'relative' }}>
           <NotificationIcon userEmail={localStorage.getItem("key")} type="user" />
          </div>

        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start text-bg-light"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title text-primary fw-bold" id="sidebarMenuLabel">
            <i className="fas fa-user me-2"></i> Welcome, User!
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body p-4">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                <i className="bi bi-house-door me-2"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/usereditprofile">
                <i className="fas fa-user-edit me-2"></i> Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/userfeedback">
                <i className="fas fa-comments me-2"></i> Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/viewqueue">
                <i className="fas fa-tasks me-2"></i> View Queue
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/viewbooking">
                <i className="fas fa-calendar-check me-2"></i> View Booking
              </Link>
            </li>
            <li className="nav-item mt-3">
              <button onClick={logout} className="btn btn-outline-danger w-100 rounded-pill fw-semibold">
                <i className="fas fa-sign-out-alt me-2"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
