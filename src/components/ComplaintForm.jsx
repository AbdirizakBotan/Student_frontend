import { useState } from "react"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from "react-router-dom"
import Website from "../pages/Website"
import Footer from "./Footer";
function ComplaintForm(){
    const [ID ,setID] = useState("")
    const [name ,setName] = useState("")
    const [description ,setDescription] = useState("")
   const navigate = useNavigate()
    const handleCreateComplaint = (e)=>{
        e.preventDefault()
        axios.post("https://student-backend-33if.onrender.com/create/complaint",{
            "ID": ID,
            "name": name,
            "description": description
        }).then(()=>{
            toast("Complaint SuccessFully Sent",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                onClose:() => navigate("/")
            })
        })
    }

    return <div>
        <Website/>
    <div className="bg-[url('https://www.scribendi.com/images/cms/thumbnails/How-to-Write-a-Letter-of-Complaint_720x370.jpg')] bg-center bg-cover bg-no-repeat w-full h-screen">
        <div className="w-full h-screen backdrop-blur-lg">
        <div className="pt-[16%] sm:ml-[23%] ml-8 ">
        <form className="bg-primaryColor opacity-90 rounded  text-center text-textColor sm:w-[800px] w-[330px]">
       <label className="text-2xl ml-12 mr-2">ID:</label>
        <input value={ID} onChange={(id) => setID(id.target.value)} className="sm:w-[300px] h-10 mr-2 rounded p-3 mt-4  outline-none text-black mb-4" type="text" placeholder="Enter Your ID" />
        <label className="text-2xl mr-2">Name:</label>
        <input value={name} onChange={(names) => setName(names.target.value)} className="sm:w-[300px] h-10 rounded p-3 outline-none text-black mb-4" type="text" placeholder="Enter Your Name" /><br></br>
        <label className="text-2xl">Complaints:</label><br></br>
        <textarea value={description} onChange={(description) => setDescription(description.target.value)} className="sm:w-[700px] w-[300px] text-black h-40 rounded p-3 outline-none" name="" id="" cols="30" rows="10" placeholder="Enter Complaints........"></textarea><br></br>
        <button onClick={handleCreateComplaint} className="border-2  rounded px-16 mb-3 text-2xl text-textColor">Send</button>
        </form>
        </div>
        </div>
    </div>
    <ToastContainer/>
    </div>
    }
    export default ComplaintForm