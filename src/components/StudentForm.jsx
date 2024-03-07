import { useState } from "react"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
// import RootLayout from "../layouts/RootLayout";
function StudentForm(){
    const [ID , setID] = useState("")
    const [name , setName] = useState("")
    const [className , setClassName] = useState("")
    const [sub1 , setSub1] = useState("")
    const [sub2 , setSub2] = useState("")
    const [sub3 , setSub3] = useState("")
    const [sub4 , setSub4] = useState("")
  const navigate = useNavigate()
 const   handleRegisterStudent = (e) =>{
    e.preventDefault()
    axios.post("https://student-backend-33if.onrender.com/create/student",{
        "ID": ID,
        "name": name,
        "className": className,
        "sub1": sub1,
        "sub2": sub2,
        "sub3": sub3,
        "sub4": sub4
    }).then((res)=>{
        toast("Student Registered SuccessFully Saved",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            onClose:() => navigate("/students")
        })
    })
 }
return <div>
    {/* <RootLayout> */}
    <SideNav />
    <div className="bg-primaryColor     absolute top-5">
    <h1 className="text-textColor  pl-12 text-3xl">  <i class="fa-solid mr-2  fa-school"></i> <span>SERCS</span></h1> 
        <hr className="w-36 ml-12 " />
        </div>
        
    <div className="h-16 ml-[17.3em] rounded mr-1 shadow-xl shadow-indigo-150  bg-textColor">
    <h1 className="text-4xl font-semibold  pl-56  pt-2 pb-10 text-primaryColor">Student Examination Form</h1>
    </div>
    <h1 className="text-4xl  ml-[25%] pt-12  font-semibold  text-primaryColor">Student Examination Form</h1>
    <form className="text-center mt-2 ml-[25%] rounded text-textColor w-[900px] bg-primaryColor pb-8 pt-10">
        <label className="text-2xl ml-12">ID:</label>
        <input value={ID} onChange={(id) => setID  (id.target.value) } className="w-[300px] m-3 ml-12 pl-10 text-black   outline-none h-[50px] rounded" type="text" placeholder="Enter Your ID...." />
        <label className="text-2xl ml-16 ">Name:</label>
        <input value={name} onChange={(name)=> setName (name.target.value)}  className="w-[300px] m-3 pl-10 text-black   outline-none h-[50px]  rounded" type="text" placeholder="Enter Your Name...." />
        <br></br>
        <label className="text-2xl ml-[2.9em]">Class:</label>
        <input value={className} onChange={(className) => setClassName(className.target.value)}  className="w-[300px] m-3 pl-10 text-black b  outline-none h-[50px] mr-8 rounded" type="text" placeholder="Enter Your ClassName........" />
        <label className="text-2xl">Subject 1:</label>
        <input value={sub1} onChange={(subject1) => setSub1(subject1.target.value)}  className="w-[300px] m-3 pl-10 text-black  outline-none h-[50px] rounded" type="text" placeholder="Enter Subject 1...." />
        <br></br>
        <label className="text-2xl ml-6">Subject 2:</label>
        <input value={sub2} onChange={(subject2) => setSub2(subject2.target.value)}  className="w-[300px] m-3 pl-10 text-black  outline-none h-[50px] rounded" type="text" placeholder="Enter Subject 2...." />
        <label className="text-2xl">Subject 3:</label>
        <input value={sub3} onChange={(subject3) => setSub3(subject3.target.value)}  className="w-[300px] m-3 pl-10 text-black  outline-none h-[50px] rounded" type="text" placeholder="Enter Subject 3...." />
        <br/>
        <label className="text-2xl ml-6">Subject 4:</label>
        <input value={sub4} onChange={(subject4) => setSub4(subject4.target.value)}  className="w-[300px] m-3 pl-10 text-black  outline-none h-[50px] mr-[49%] rounded" type="text" placeholder="Enter  Subject 4...." /><br></br>
        <button onClick={handleRegisterStudent}  className="bg-textColor text-primaryColor px-12 py-2 text-2xl rounded">Save</button>
    </form>
    <ToastContainer />
    {/* </RootLayout> */}

    <div className="  absolute pb-4 bottom-0">
        <hr className="w-36 font-bold  mt-2 ml-12" />
        <h1 className="text-textColor mb-8 pl-12 text-3xl">  <i class="fa-solid mr-2 fa-school"></i> <span>SERCS</span></h1>
        
    </div>
</div>
}
export default StudentForm