import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from './components/common/Contact'

//owner path
import OwnerRegister from "./components/owner/OwnerRegisters";   //1st UserRegister
import Ownerlogin from "./components/owner/OwnerLogin.jsx"; 
import OwnerHome from "./components/owner/OwnerHome.jsx";

//user path
import Userlogin from "./components/user/UserLogin.jsx";
import UserRegister from "./components/user/UserRegister.jsx";
import UserHome from "./components/user/UserHome.jsx";
import UserEditProfile from "./components/user/UserEditProfile"
import UserFeedback from "./components/user/UserFeedback.jsx";
import AllContacts from "./components/admin/AllContacts.jsx";




function RoutePath() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>

          <Route path="/ownerlogin" element={<Ownerlogin/>}></Route> 
          <Route path="/ownerRegister" element={<OwnerRegister/>}></Route> 
          <Route path="/ownerhome" element={<OwnerHome/>}></Route>
          
          <Route path="/userhome" element={<UserHome/>}></Route>
          <Route path="/userlogin" element={<Userlogin/>}></Route>
          <Route path="/userRegister" element={<UserRegister/>}></Route>
          <Route path="/usereditprofile" element={<UserEditProfile/>}></Route>
          <Route path="/userfeedback" element={<UserFeedback/>}></Route>


          <Route path="/allContacts" element={<AllContacts/>}></Route>


          




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePath;
