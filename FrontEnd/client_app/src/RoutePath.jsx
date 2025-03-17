import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from './components/common/Contact'
import Adminlogin from './components/admin/Adminlogin'; // Importing Adminlogin
import Userlogin from './components/user/Userlogin'; 



function RoutePath() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Adminlogin" element={<Adminlogin />}></Route> {/* New route for Adminlogin */}
          <Route path="/Userlogin" element={<Userlogin />}></Route> 

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePath;
