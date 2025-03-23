import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";
// import Adminlogin from "./OwnerLogin";
import axios from "axios"

function OwnerRegister() {

  const navigate = useNavigate()

  const [registrationData, setRegistrationData]=useState({
    email:"",
    password:"",
    orgname:"",
    ownername:"",
    address:"",
    phone:"",
    orgtype:"",
    description:"",
    file:"",


  });
  const fetchData = (event) => {
  //  const {name,value,type,files}=event.target;
  //  console.log(value)
   setRegistrationData({...registrationData,[event.target.name]:event.target.value})          // updating value
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(registrationData);
    
    const serverResponse = await axios.post("http://localhost:3000/owner/addowner",registrationData)       //(is par bhejte hai ,  ye bhejte hai)
    alert(serverResponse.data.message);
    navigate("/ownerlogin")
 
  };

  return (
    <>
      <Header />
      <div className="main" style={{height:"160vh"}}>
        
      <section className="vh-100 " style={{ backgroundColor: '', marginTop: "2%" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mt-4" style={{fontSize:"1.8rem"}}>
                        Organization Registration
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">Your Email</label>
                            <input type="text" id="form3Example1c" name="email" value={registrationData.email} onChange={fetchData} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">Password</label>
                            <input type="password" name="password" value={registrationData.password} onChange={fetchData} id="form3Example3c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className='fas fa-building fa-lg me-3 fa-fw'></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">Orgname</label>
                            <input type="text" name="orgname" value={registrationData.orgname} onChange={fetchData} id="form3Example4c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4d">OwnerName</label>
                            <input type="text" name="ownername" onChange={fetchData} value={registrationData.ownername} id="form3Example4d" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className='fas fa-phone-volume fa-lg me-3 fa-fw'></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4e">Phone</label>
                            <input type="tel" name="phone" onChange={fetchData} value={registrationData.phone} id="form3Example4e" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">Address</label>
                            <input type="text" name="address" onChange={fetchData} value={registrationData.address} id="form3Example4cd" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <select data-mdb-select-init name="orgtype" onChange={fetchData} value={registrationData.orgtype}>
                            <option value="1">Organization Type</option>
                            <option value="2">Salon</option>
                            <option value="3">Clinic</option>
                            <option value="4">Hospital</option>
                            <option value="5">Shop</option>
                          </select>
                        </div>

                        <div>
                          <textarea placeholder="Description" name="description" onChange={fetchData} value={registrationData.description}> Description </textarea>
                        </div>

                        {/* File Input */}
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-user"></i>
                          </span>
                          <div className="form-floating">
                            <input
                              onChange={fetchData}
                              type="file"
                              name="file"
                              value={registrationData.file}
                              className="form-control"   
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>

                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-6 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

export default OwnerRegister;





















// import React, { useState } from "react";
// import Header from "../common/Header";
// import Footer from "../common/Footer";
// import { useNavigate } from "react-router-dom";
// // import Adminlogin from "./OwnerLogin";
// import axios from "axios"

// function OwnerRegister() {

//   const navigate = useNavigate()

//   const [registrationData, setRegistrationData]=useState({
//     email:"",
//     password:"",
//     orgname:"",
//     ownername:"",
//     address:"",
//     phone:"",
//     orgtype:"",
//     description:"",
//     file:"",


//   });
//   const fetchData = (event) => {
//   //  const {name,value,type,files}=event.target;
//   //  console.log(value)
//    setRegistrationData({...registrationData,[event.target.name]:event.target.value})          // updating value
//   };

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     console.log(registrationData);
    
//     const serverResponse = await axios.post("http://localhost:3000/owner/addowner",registrationData)       //(is par bhejte hai ,  ye bhejte hai)
//     alert(serverResponse.data.message);
//     navigate("/ownerlogin")
 
//   };

//   return (
//     <>
//       <Header />
//       <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Organization Registration</h2>
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input type="email" name="email" placeholder="Your Email" value={registrationData.email} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required />
//           <input type="password" name="password" placeholder="Password" value={registrationData.password} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required />
//           <input type="text" name="orgname" placeholder="Organization Name" value={registrationData.orgname} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required />
//           <input type="text" name="ownername" placeholder="Owner Name" value={registrationData.ownername} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required />
//           <input type="tel" name="phone" placeholder="Phone" value={registrationData.phone} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required />
//           <input type="text" name="address" placeholder="Address" value={registrationData.address} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required />
//           <select name="orgtype" value={registrationData.orgtype} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required>
//             <option value="">Select Organization Type</option>
//             <option value="Salon">Salon</option>
//             <option value="Clinic">Clinic</option>
//             <option value="Hospital">Hospital</option>
//             <option value="Shop">Shop</option>
//           </select>
//           <textarea name="description" placeholder="Description" value={registrationData.description} onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required></textarea>
//           <input type="file" name="file" onChange={fetchData} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} required />
//           <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Register</button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default OwnerRegister;


