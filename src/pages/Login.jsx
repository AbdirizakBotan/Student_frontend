import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Login(){
    const [username , setUsername ] = useState("")
    const [password ,setPassword] = useState("")
      const navigate = useNavigate()
    const loginAdmin = (e)=>{
        e.preventDefault()
        axios.post("https://student-backend-33if.onrender.com/login/admin",{
            "username":  username,
            "password": password
        }).then((res)=>{
            if(res.data.error){
                toast("incorrect username or password",{
                    position: "top-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                })
            }
            else{
                toast("Successfully Done",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    onClose:() => navigate("/dashboard")
                })
                localStorage.setItem("admin",JSON.stringify(res.data))
            }
        }).catch((error) => console.log(error))
    }
    return <div className=" p-2 h-screen">

        <div className="flex justify-center ">
            <form className="w-[400px] p-5 rounded-[8px] shadow-lg  h-[350px] mt-32 bg-primaryColor">
            <h1 className="text-center text-5xl mb-4 text-white">Admin</h1>
                <label className="text-2xl  text-white" htmlFor="username">Username:</label>
                <input value={username} onChange={(username) => setUsername(username.target.value)} className="w-[350px] h-[50px] text-black outline-none p-3 rounded mb-4 " type="text" placeholder="Enter UserName...." />
                <br></br>
                <label className="text-2xl text-white" htmlFor="username">Password:</label>
                <input value={password} onChange={(password) => setPassword(password.target.value)} className="w-[350px] h-[50px] text-black outline-none p-3 rounded   " type="text" placeholder="Enter Password...." />
                <br></br>
                <button onClick={loginAdmin} className="bg-textColor px-6 py-2 mt-4  text-2xl text-primaryColor rounded-[4px]">Login</button>
            </form>
        </div>
        <ToastContainer />
    </div>
    }
    export default Login