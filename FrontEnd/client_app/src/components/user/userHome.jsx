import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './UserHeader'
function Userhome() {
    const navigate = useNavigate()
    const tokenEmail = localStorage.getItem("key")
    const URL = "http://localhost:3000/user/userProfile"
    const [user, setUser] = useState({})

    useEffect(() => {
        if (!tokenEmail || tokenEmail==null) {

            navigate("/userlogin")
        }
        else {

            fetchuserDetails()
        }

    }, [])//useeffect ends here

    const fetchuserDetails = async () => {
        try {
const params={email:tokenEmail}
            const serverResponse = await axios.get(URL, {params})
            console.log(serverResponse);
            setUser(serverResponse.data.userObject)//setting user profile details in user object

        }
        catch (err) { 
            console.log(err.messsage)
        }

    }

    return (
        <>
<Header/>           
 {/* <h1 className='talign'>Welcome {user.username}</h1> */}
            <div className="card mx-auto" style={{ width: "18rem", backgroundColor:"red", marginTop:"150px" }}>
            <img 
                    style={{ borderRadius: "50%", height: "130px", width: "40%", margin: "auto" }} 
                    src={`http://localhost:3000/uploads/${user.pic}`} 
                    alt="User Profile" // Added alt attribute
                />                <div className="card-body">
                    <div style={{ fontFamily:"cursive"}}>
                    <p className="card-text">City:-{user.city}</p>
                    <p className="card-text">Address:-{user.address}</p>
                    <h5 className="card-title">Phone:-{user.phone}</h5>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Userhome


// add profile pic in usermodel userregister usercontroler
//