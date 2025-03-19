import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from './components/common/Contact'
import Adminlogin from './components/admin/Adminlogin'; // Importing Adminlogin
import Userlogin from './components/user/Userlogin'; 
import OwnerRegister from "./components/registration/OwnerRegisters.jsx";   //1st UserRegister



function RoutePath() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
           <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Adminlogin" element={<Adminlogin />}></Route> 
          <Route path="/Userlogin" element={<Userlogin />}></Route> 
          <Route path="/ownerRegister" element={<OwnerRegister/>}></Route> 
          




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePath;
