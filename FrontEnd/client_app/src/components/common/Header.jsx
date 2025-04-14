import { Link } from 'react-router-dom';
import '../../css/Custom_style.css';
const AidlineLogo = '/images/l.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 shadow-sm px-3 rounded-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={AidlineLogo} alt="Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold text-info fs-5">Queue Manage</span>
        </Link>
        
        <button
          className="navbar-toggler border-info"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="#">Link</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contact">Contact</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Register
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark bg-dark bg-opacity-90">
                <li><Link className="dropdown-item text-info" to="/userRegister">User</Link></li>
                <li><Link className="dropdown-item text-info" to="/ownerRegister">Owner</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark bg-dark bg-opacity-90">
                <li><Link className="dropdown-item text-info" to="/userlogin">User</Link></li>
                <li><Link className="dropdown-item text-info" to="/ownerlogin">Owner</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
