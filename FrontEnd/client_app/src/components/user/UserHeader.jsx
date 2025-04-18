import { Link, useNavigate } from "react-router-dom";


function Header(){
    const navigate = useNavigate();

    //logout function
    const logout = () => {
        const tokenEmail = localStorage.getItem("key");
        if (!tokenEmail) {
          navigate("/userlogin");
        } else {
          localStorage.removeItem("key");
          navigate("/userlogin");
        }
      };

return(


<>

<nav className="navbar navbar-dark bg-primary fixed-top">
    <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mx-auto" href="#"><i className="fas fa-user-circle"></i> MyApp</a>
    </div>
</nav>


<div className="offcanvas offcanvas-start text-bg-primary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel"><i className="fas fa-user"></i> Welcome, User!</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    
    <div className="offcanvas-body">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link text-white" href="/userhome"><i className="bi bi-house-door"></i> Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/usereditprofile"><i className="fas fa-user-edit"></i> Edit Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="userfeedback"><i className="fas fa-comments"></i> Feedback</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/viewqueue"><i className="fas fa-tasks"></i> View Queue</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/viewbooking"><i className="fas fa-tasks"></i> View Booking</a>
            </li>
            <li className="nav-item">
                <button onClick={logout} type="button" className="btn btn_link">
             <i className="fas fa-sign-out-alt" ></i> Logout</button>
            </li>
        </ul>
    </div>
</div>
</>

)
};
export default Header
