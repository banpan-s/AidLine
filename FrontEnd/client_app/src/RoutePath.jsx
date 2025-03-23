import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from './components/common/Contact'

import OwnerRegister from "./components/owner/OwnerRegisters";   //1st UserRegister
import Ownerlogin from "./components/owner/OwnerLogin.jsx"; 
// import UserHome from "./components/user/UserHome.jsx";
import OwnerHome from "./components/owner/OwnerHome.jsx";
import Userlogin from "./components/user/Userlogin.jsx";
import UserRegister from "./components/user/UserRegister.jsx";




function RoutePath() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="/ownerlogin" element={<Ownerlogin/>}></Route> 

           <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/ownerRegister" element={<OwnerRegister/>}></Route> 
          {/* <Route path="/ownerlogin" element={<Ownerlogin/>}></Route> */}
          {/* <Route path="/userhome" element={<UserHome/>}></Route> */}
          <Route path="/ownerhome" element={<OwnerHome/>}></Route>
          <Route path="/userlogin" element={<Userlogin/>}></Route>
          <Route path="/userRegister" element={<UserRegister/>}></Route>


          




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePath;
