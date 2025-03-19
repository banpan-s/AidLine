import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios"

function OwnerRegister() {

  const [registrationData, setRegistrationData]=useState({
    email:"",
    password:"",
    orgname:"",

  })
  const fetchData = (event) => {
   const {name,value,type,files}=event.target
   setRegistrationData({...registrationData,[name]:value})          // updating value
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(registrationData);
    
    await axios.post("http://localhost:3000/owner/addowner",registrationData)       //(is par bhejte hai ,  ye bhejte hai)
  };

  return (
    <>
      <Header />
      <section className="vh-100" style={{ backgroundColor: '', marginTop: "2%" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
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
                            <input type="text" id="form3Example4d" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className='fas fa-phone-volume fa-lg me-3 fa-fw'></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4e">Phone</label>
                            <input type="tel" id="form3Example4e" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">Address</label>
                            <input type="text" id="form3Example4cd" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <select data-mdb-select-init>
                            <option value="1">Organization Type</option>
                            <option value="2">Salon</option>
                            <option value="3">Clinic</option>
                            <option value="4">Hospital</option>
                            <option value="5">Shop</option>
                          </select>
                        </div>

                        <div>
                          <textarea placeholder="Description"> Description </textarea>
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
                              name="pic"
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
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OwnerRegister;
