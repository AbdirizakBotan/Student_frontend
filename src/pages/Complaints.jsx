import { useEffect, useState } from "react"
import SideNav from "../components/SideNav"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Complaints() {

    const [getComplaint, setGetComplaint] = useState([])

    const handleReadComplaints = () => {
        axios.get("https://student-backend-33if.onrender.com/read/complaint").then((res) => {
            setGetComplaint(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadComplaints()
    }, [])

    const handleDeleteComplaint = (id) => {
        axios.delete(`https://student-backend-33if.onrender.com/delete/complaint/${id}`).then(() => {
            toast("Complaint Deleted", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
            })
            handleReadComplaints()
        }).catch((error) => console.log(error))
    }

    return <div>
        <SideNav />
        <div className="bg-primaryColor absolute top-5">
        
        <h1 className="text-textColor  pl-12 text-3xl">  <i class="fa-solid mr-2  fa-school"></i> <span>SERCS</span></h1>  
        <hr className="w-36 ml-12" />
        </div>
        <div className="h-16 ml-[17.3em] rounded mr-1 shadow-xl shadow-indigo-150 bg-textColor">
        <h1 className="pt-3 text-center  text-3xl font-semibold text-primaryColor">Students Exam Results Complaint Management System</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 ml-[17.5em] mb-5">
            {
                getComplaint.length > 0 ? getComplaint.map((data) => {
                    return <div className="pt-10 ">
                        <div className="bg-primaryColor  shadow-xl shadow-indigo-200   w-[25em] h-[20em] rounded-lg text-textColor">
                            <div className="flex gap-5">
                                <h1 className="text-2xl pl-2 pt-2 font-semibold">ID :</h1>
                                <h1 className="text-xl pt-3">{data.ID}</h1>
                            </div>

                            <div className="flex gap-5">
                                <h1 className="text-2xl pl-2 pt-2 font-semibold">Name :</h1>
                                <h1 className="text-xl pt-3">{data.name}</h1>
                            </div>

                            <div className="pb-12">
                                <h1 className="text-2xl text-center pt-2 font-semibold">Complaint:</h1>
                                <h1 className="text-xl pt-3 pl-2">{data.description}</h1>
                            </div>
                            <hr className="border-gray-500" />
                            <div className="flex justify-between px-3 pt-2">
                                <h1 className="text-2xl">{new Date(data.createdAt).toDateString()}</h1>
                                <i onClick={() => handleDeleteComplaint(data._id)} class="fa-solid text-red-500 cursor-pointer text-xl fa-trash"></i>
                            </div>

                        </div>

                    </div>
                })
                :
                <p className="pt-5 text-4xl text-red-500">There is no data yet</p>
            }
        </div>
        <ToastContainer/>
        <div className="  absolute pb-4 bottom-0">
        <hr className="w-36 font-bold  mt-2 ml-12" />
        <h1 className="text-textColor mb-8 pl-12 text-3xl">  <i class="fa-solid mr-2 fa-school"></i> <span>SERCS</span></h1>
        
    </div>
    </div>
}

export default Complaints
