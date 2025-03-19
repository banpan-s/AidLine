import { Link } from 'react-router-dom';
import '../../css/Custom_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const AidlineLogo = '/images/Aidline_logo.png'; // Updated image import


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="logo" to="#"><img src={AidlineLogo} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                             


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Register
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/adminRegister">Admin</Link></li>
                                    <li><Link className="dropdown-item" to="/ownerRegister">Owner</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login   
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/adminlogin">Admin</Link></li>
                                    <li><Link className="dropdown-item" to="/userlogin">Owner</Link></li>
                                </ul>
                            </li>


                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;
