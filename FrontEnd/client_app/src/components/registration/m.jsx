// import React, { useState } from "react";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import Header from "../common/Header";

// function User_Registration() {
//   const navigate=useNavigate()
//    const URL="http://localhost:3000/user/userRegistration"
 
//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//     uname: "",
//     phone: "",
//     gender: "",
//     city: "",
//     address: "",
//   });
//   const [userPic, setUserPic] = useState(null);

//   const fetchData = (e) => {
//     const { name, value, type, files } = e.target;
    
//     if (type === "file") {
//       console.log(files[0])
//       setUserPic(files[0]); //it is an object->
     
      
      
//     } else {
//       setUserData({ ...userData, [name]: value });
//     }
//   };

//   const submitData=async(e)=>{

// e.preventDefault()
// alert("in submit")
// console.log(userPic);
// //setting all data in formData object
//   const formData = new FormData();
//     formData.append("email", userData.email);
//     formData.append("password", userData.password);
//     formData.append("uname", userData.uname);
//     formData.append("phone", userData.phone);
//     formData.append("gender", userData.gender);
//     formData.append("city", userData.city);
//     formData.append("address", userData.address);
//      formData.append("pic", userPic); 
    

//     try{
//       const response=await axios.post(URL,formData)
//       console.log(response);
//       alert(response.data)
//       alert("Registration done successfully")
//        //clear all fields
     
        

//        setUserData({
//         email: "",
//         password: "",
//         uname: "",
//         phone: "",
//         gender: "",
//         city: "",
//         address: "",
//       });
//       setUserPic(null);
//       navigate("/user_login")

//     }
//     catch(err){console.log(err.message);
//     }


//   }

//   return (
//     <>
//     <Header/>
//       <div className="w-100 text-center">
//         <h1>User Registration</h1>
//       </div>
     
//       <div className="row justify-content-center align-items-center h-50 w-100">
//         <div className="col-md-6 pt-2">
//           <form onSubmit={submitData}>
//           {/* Email Input */}
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <i className="fas fa-envelope-square"></i>
//             </span>
//             <div className="form-floating">
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="email"
//                 name="email"
//                 value={userData.email}
//                 onChange={fetchData}
//               />
//               <label htmlFor="email">Email</label>
//             </div>
//           </div>

//           {/* Password Input */}
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <i className="fas fa-key"></i>
//             </span>
//             <div className="form-floating">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="password"
//                 name="password"
//                 value={userData.password}
//                 onChange={fetchData}
//               />
//               <label htmlFor="password">Password</label>
//             </div>
//           </div>

//           {/* Username Input */}
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <i className="fas fa-user-circle"></i>
//             </span>
//             <div className="form-floating">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="uname"
//                 placeholder="username"
//                 name="uname"
//                 value={userData.uname}
//                 onChange={fetchData}
//               />
//               <label htmlFor="uname">Name</label>
//             </div>
//           </div>

//           {/* Phone Input */}
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <i className="fas fa-phone"></i>
//             </span>
//             <div className="form-floating">
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone"
//                 placeholder="phone"
//                 name="phone"
//                 value={userData.phone}
//                 onChange={fetchData}
//               />
//               <label htmlFor="phone">Phone</label>
//             </div>
//           </div>

//           {/* Address Input */}
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <i className="fas fa-map"></i>
//             </span>
//             <div className="form-floating">
//               <textarea
//                 className="form-control"
//                 id="address"
//                 placeholder="address"
//                 name="address"
//                 value={userData.address}
//                 onChange={fetchData}
//               />
//               <label htmlFor="address">Address</label>
//             </div>
//           </div>

//           {/* Gender Radio Buttons */}
//           <div className="text-center mb-3">
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gender"
//                 id="male"
//                 value="male"
//                 checked={userData.gender === "male"}
//                 onChange={fetchData}
//               />
//               <label className="form-check-label" htmlFor="male">
//                 Male
//               </label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gender"
//                 id="female"
//                 value="female"
//                 checked={userData.gender === "female"}
//                 onChange={fetchData}
//               />
//               <label className="form-check-label" htmlFor="female">
//                 Female
//               </label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gender"
//                 id="other"
//                 value="other"
//                 checked={userData.gender === "other"}
//                 onChange={fetchData}
//               />
//               <label className="form-check-label" htmlFor="other">
//                 Other
//               </label>
//             </div>
//           </div>

//           {/* City Dropdown */}
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <i className="fas fa-map-marker-alt"></i>
//             </span>
//             <select
//               className="form-select"
//               aria-label="Default select example"
//               name="city"
//               value={userData.city}
//               onChange={fetchData}
//             >
//               <option value="">Select City</option>
//               <option value="lucknow">Lucknow</option>
//               <option value="Delhi">Delhi</option>
//               <option value="varanasi">Varanasi</option>
//             </select>
//           </div>

//           {/* File Input */}
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <i className="fas fa-user"></i>
//             </span>
//             <div className="form-floating">
//               <input
//                 type="file"
//                 name="pic"
//                 className="form-control"
//                 onChange={fetchData}
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button className="btn btn-primary">Submit</button>
//           </div>
//           </form>
//         </div>
//       </div>

//     </>
//   );
// }

// export default User_Registration;
