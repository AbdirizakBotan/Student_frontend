import { useState,useEffect } from "react"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import SideNav from "./SideNav";
function UpdateStudent(){
    const [ID , setID] = useState()
    const [name , setName] = useState()
    const [className , setClassName] = useState()
    const [sub1 , setSub1] = useState()
    const [sub2 , setSub2] = useState()
    const [sub3 , setSub3] = useState()
    const [sub4 , setSub4] = useState()

     const navigate = useNavigate()
    const params = useParams()
    const handleSingleData =() =>{
        axios.get(`https://student-backend-33if.onrender.com/read/single/${params.id}`).then((res)=>{
           setID(res.data[0].ID)
           setName(res.data[0].name)
           setClassName(res.data[0].className)
           setSub1(res.data[0].sub1)
           setSub2(res.data[0].sub2)
           setSub3(res.data[0].sub3)
           setSub4(res.data[0].sub4)
        })
       }
 useEffect(()=>{
    handleSingleData()
},[])
  const handleUpdateStudent = (e) =>{
    e.preventDefault()
    axios.put(`https://student-backend-33if.onrender.com/update/student/${params.id}`,{
        "ID": ID,
        "name": name,
        "className": className,
        "sub1": sub1,
        "sub2": sub2,
        "sub3": sub3,
        "sub4": sub4,
    }).then((res)=>{
        toast("Student Updated SuccessFully",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            onClose:() => navigate("/students")
        })
    }).catch((error)=> console.log(error))
  }
return <div>
    <SideNav/>
    <div className="bg-primaryColor     absolute top-5">
    <h1 className="text-textColor  pl-12 text-3xl">  <i class="fa-solid mr-2  fa-school"></i> <span>SERCS</span></h1>  
        <hr className="w-36 ml-12 " />
        </div>
    <div className="h-16 ml-[17.3em] shadow-xl rounded shadow-gray-300 mr-1 bg-text-textColor">
    <h1 className="text-4xl font-semibold text-center  pt-2 pb-10 text-primaryColor">Student Examination Update Form</h1>
    </div>
<h1 className="text-4xl ml-[9.5em]  pt-12 pb-2 font-semibold text-primaryColor">Student Examination Update Form</h1>
<form className="text-center mt-2 ml-[25%] rounded text-textColor w-[900px] bg-primaryColor pb-8 pt-10">
        <label className="text-2xl ml-12">ID:</label>
        <input value={ID} onChange={(id) => setID  (id.target.value) } className="w-[300px] m-3 ml-12 pl-10 text-primaryColor border-blue-500 outline-none h-[50px] rounded" type="text" placeholder="Enter Your ID...." />
        <label className="text-2xl ml-16 ">Name:</label>
        <input value={name} onChange={(name)=> setName (name.target.value)}  className="w-[300px] m-3 pl-10 text-primaryColor border-blue-500 outline-none h-[50px]  rounded" type="text" placeholder="Enter Your Name...." />
        <br></br>
        <label className="text-2xl ml-[2.9em]">Class:</label>
        <input value={className} onChange={(className) => setClassName(className.target.value)}  className="w-[300px] m-3 pl-10 text-primaryColor outline-none h-[50px] mr-8 rounded" type="text" placeholder="Enter Your ClassName........" />
        <label className="text-2xl">Subject 1:</label>
        <input value={sub1} onChange={(subject1) => setSub1(subject1.target.value)}  className="w-[300px] m-3 pl-10 text-primaryColor outline-none h-[50px] rounded" type="text" placeholder="Enter Subject 1...." />
        <br></br>
        <label className="text-2xl ml-6">Subject 2:</label>
        <input value={sub2} onChange={(subject2) => setSub2(subject2.target.value)}  className="w-[300px] m-3 pl-10 text-primaryColor outline-none h-[50px] rounded" type="text" placeholder="Enter Subject 2...." />
        <label className="text-2xl">Subject 3:</label>
        <input value={sub3} onChange={(subject3) => setSub3(subject3.target.value)}  className="w-[300px] m-3 pl-10 text-primaryColor outline-none h-[50px] rounded" type="text" placeholder="Enter Subject 3...." />
        <br/>
        <label className="text-2xl ml-6">Subject 4:</label>
        <input value={sub4} onChange={(subject4) => setSub4(subject4.target.value)}  className="w-[300px] m-3 pl-10 text-primaryColor outline-none h-[50px] mr-[49%] rounded" type="text" placeholder="Enter  Subject 4...." /><br></br>
        <button onClick={handleUpdateStudent}  className="bg-textColor text-primaryColor px-12 py-2 text-2xl rounded">Update</button>
    </form>
    <ToastContainer />
    <div className="  absolute pb-4 bottom-0">
        <hr className="w-36 font-bold  mt-2 ml-12" />
        <h1 className="text-textColor mb-8 pl-12 text-3xl">  <i class="fa-solid mr-2 fa-school"></i> <span>SERCS</span></h1>
        
    </div>
</div>
}
export default UpdateStudent