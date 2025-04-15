import App from "./App";
import Contact from "./components/common/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//userfeedback
import UserFeedback from "./components/user/UserFeedback.jsx";

//usercontact
import AllContacts from "./components/admin/AllContacts.jsx";

//admin path
import Adminlogin from "./components/admin/AdminLogins.jsx";

//owner path
import OwnerRegister from "./components/owner/OwnerRegisters";
import Ownerlogin from "./components/owner/OwnerLogin.jsx";
import OwnerHome from "./components/owner/OwnerHome.jsx";
import CreateQueue from "./components/owner/CreateQueue.jsx";


//user path
import Userlogin from "./components/user/UserLogin.jsx";
import UserRegister from "./components/user/UserRegister.jsx";
import UserHome from "./components/user/UserHome.jsx";
import UserEditProfile from "./components/user/UserEditProfile";
import ViewQueue from "./components/user/ViewQueue.jsx";
import BookQueue from "./components/user/BookQueue.jsx";
import ViewBooking from "./components/user/ViewBooking.jsx";


function RoutePath() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<Adminlogin />}></Route>

          <Route path="/" element={<App />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

          <Route path="/ownerlogin" element={<Ownerlogin />}></Route>
          <Route path="/ownerRegister" element={<OwnerRegister />}></Route>
          <Route path="/ownerhome" element={<OwnerHome />}></Route>
          <Route path="/createqueue" element={<CreateQueue/>}></Route>


          <Route path="/userRegister" element={<UserRegister />}></Route>
          <Route path="/userlogin" element={<Userlogin />}></Route>
          <Route path="/userhome" element={<UserHome />}></Route>
          <Route path="/usereditprofile" element={<UserEditProfile />}></Route>
          <Route path="/userfeedback" element={<UserFeedback />}></Route>
          <Route path="/viewqueue" element={<ViewQueue/>}></Route>
          <Route path="/viewbooking" element={<ViewBooking/>}></Route>

          <Route path="/allContacts" element={<AllContacts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePath;
