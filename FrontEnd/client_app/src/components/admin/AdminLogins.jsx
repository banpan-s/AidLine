import { useState } from "react"
// import Footer from "../Common/Footer"
// import Header from "../common/Header"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const AdminLogin = () => {

  const navigate = useNavigate()
  const [admindata, setadmindata] = useState({ adminemail: "", adminpass: "" })
  const URL="http://localhost:3000/admin/adminLogin"
  const fetchdata = (e) => {
    //console.log(e.target.name)
    //console.log(e.target.value)
    setadmindata({ ...admindata, [e.target.name]: e.target.value })
    console.log(admindata);
  }
  const submitdata = async(e) => {
    e.preventDefault();
    try{
      const serverResponse = await axios.post(URL,admindata)
      console.log(serverResponse);
 
      if (serverResponse.data.status === "Success") 
         {
             localStorage.setItem("key",serverResponse.data.token)
         
         alert(serverResponse.data.message)
          navigate("/")
 
      }
      else{
         alert(serverResponse.data.message)
      }
       }
       catch(err)
       {console.log(err.message)}
       console.log(admindata);
   




  }
  
  return (
    <>
     {/* <Header/> */}
            <div className="main">
            <h2 style={{marginBottom:"40px",textAlign:"center"}}>Your journey starts here.</h2>
                <div className="now">
                    <div className="ttt">
                        <form onSubmit={submitdata}>
                            <h3>Sign in</h3>
                            
                            <div className=" input-group mb-3">
                    <span className="input-group-text">
            <i className="fas fa-envelope"></i>
                    </span>
                    <div className="form-floating ">
                    <input type="email" name="adminemail" className="form-control" value={admindata.adminemail} id="floatingInput" onChange={fetchdata} placeholder="email"/>
                            <label htmlFor="floatingInput">Email</label>
                            </div>
                             </div>

                             <div className=" input-group mb-3">
                    <span className="input-group-text">
            <i className="fas fa-key"></i>
                    </span>
                    <div className="form-floating ">
                    <input type="password" name="adminpass" className="form-control" value={admindata.adminpass} id="floatingpassword" onChange={fetchdata} placeholder="password"/>
                            <label htmlFor="floatingInput">Password</label>
                            </div>
                             </div>
                            <div className="sbtn">
                                <button type="submit" className="btn btn-outline-success">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="imag">
                        <h1>Hello Friend!</h1>
                        <p className="parg">Enter your personal details and start journey with us,</p>
                        <p className="pargr">We'll never share your email with anyone else.</p>
                    </div>
                </div>
            </div>

      
      {/* <Footer/> */}
    </>
  )
}
export default AdminLogin