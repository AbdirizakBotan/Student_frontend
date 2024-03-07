import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import SideNav from "../components/SideNav"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import StudentData from "../components/StudentData";
function Dashboard(){
  const [data , setGetData] = useState([])
  const [page , setPage] = useState(0)

const handleGetStudents = ()=>{
  axios.get(`https://student-backend-33if.onrender.com/read/data?page=${page}`).then((res)=>{
      setGetData(res.data)
  }).catch((error)=> console.log(error))
}

const handleNextPage = ()=>{
  setPage(page +1)
}

const handlePrevPage = ()=>{
  if(page >0){
      setPage(page-1)
  }
}
useEffect(()=>{
handleGetStudents()
},[page])

 const deleteTeacher = (id) =>{
    axios.delete(`https://student-backend-33if.onrender.com/delete/${id}`).then(()=>{
        toast("Student Deleted SuccessFully",{
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
        })
        handleGetStudents()
    }).catch((error) => console.log(error))
}
useEffect (()=>{
    handleGetStudents()
    handleGetTotalComplaints()
    handleGetTotalStudents()
    },[])


    const [totalStudents , setTotalStudents] = useState([])
    const [totalComplaints, setTotalComplaints] = useState([])

    const handleGetTotalStudents = ()=>{
      axios.get("https://student-backend-33if.onrender.com/total/students").then((res)=>{
         setTotalStudents(res.data.total)
      }).catch((error)=> console.log(error))
   }

   const handleGetTotalComplaints = ()=>{
    axios.get("https://student-backend-33if.onrender.com/total/complaints").then((res)=>{
       setTotalComplaints(res.data.total)
    }).catch((error)=> console.log(error))
 }
  const isAuth = localStorage.getItem("admin")

  const navigate = useNavigate()

  const handleRefresh = ()=>{
      if(!isAuth){
          navigate("/login")
      }
  }

  useEffect(()=>{
    handleRefresh()
},[])
    return <div>
      <SideNav/>
      <div className="absolute top-5">
        
      <h1 className="text-textColor  pl-12 text-3xl">  <i class="fa-solid mr-2  fa-school"></i> <span>SERCS</span></h1> 
        
        <hr className="w-36 ml-12" />
        </div>
        <div className="sm:h-16 ml-[17.2em] mr-1 rounded px-4 mb-10 py-2  bg-textColor  shadow-xl shadow-indigo-150 flex justify-between">
        <h1 className="mt-2 text-center  font-semibold  text-3xl  text-primaryColor">Students Exam Results Complaint Management System</h1>
        <div className="flex ml-8  sm:gap-5 gap-2">
        <i class="fa-solid  sm:mt-2 mt-2 text-primaryColor sm:text-3xl fa-message"></i>
        <i class="fa-solid sm:mt-2 mt-2 text-primaryColor sm:text-3xl fa-bell"></i>
        <img className="sm:h-10 sm:w-10 h-8 w-8 rounded-full sm:mt-1 border-2 border-primaryColor" src="https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg" />
        </div>
        {/* <div>
          <h1 className="text-blue-500 text-2xl">Eng_Botan</h1>
        </div> */}
       
        </div>
        <div className="  grid grid-cols-[250px] ml-[21%] sm:grid-cols-[250px_250px] gap-10 h-[200px] justify-around">
        <div className="  rounded w-[250px] h-[200px] shadow-2xl shadow-indigo-300    bg-primaryColor ">
        <i class="fa-solid ml-24 mt-6 text-white mb-2 text-5xl fa-users"></i>
          <h1 className="text-5xl pb-2  font-bold text-center text-white">{totalStudents}</h1>
          <h1 className="text-2xl  text-center  text-white">Total of Students</h1>
        </div>
        <div className=" rounded w-[250px] h-[200px] shadow-2xl shadow-indigo-300   bg-primaryColor">
         <i class="fa-solid ml-24 mt-6 text-white mb-2 text-5xl fa-box-tissue"></i>
          <h1 className="text-5xl pr-2 pb-2 text-center font-bold text-white">{totalComplaints}</h1>
          <h1 className="text-2xl  text-center text-white">Total of Complaints</h1>
        </div>
        </div>
        <div>
    {/* <form className=" bg-blue-950 ml-[19%]  p-3">
    <input onChange={handleSearchStudent}  type="text"placeholder="Search..."className="text-sm focus:outline-none active:outline-none border border-gray-300 sm:w-[24rem] ml-2 h-10 pl-11 pr-4 rounded-sm"/>
        </form> */}
        <div className="ml-[17.3em]">

        <table className="table-auto  rounded bg-primaryColor text-textColor w-[1080px] mt-10">
          <thead className=" border-b-2 border-white text-white ">
           <tr className=" text-center  rounded-xl  text-white  font-medium">
            <th className="py-2 p-3">ID</th>
            <th className="py-2 p-2">Name</th>
           <th className="py-2  p-2">ClassName</th>
           <th className="py-2  p-2">Html</th>
           <th className="py-2  p-2">Css</th>
           <th className="py-2  p-2">JS</th>
           <th className="py-2  p-2">React Js</th>
           <th className="py-2  p-2 ">Date</th>
           <th className="py-2  p-2  ">Options</th>
           <th className="py-2 p-2">View</th>
           </tr>
          </thead>
          {
         data.length > 0 ?   data.map((data)=>{
              return <StudentData handleDelete={  ()=> {deleteTeacher(data._id)}} id={data._id} ID={data.ID}  name={data.name} className={data.className} sub1={data.sub1} sub2={data.sub2} sub3={data.sub3} sub4={data.sub4} sub5={data.sub5} date={new Date(data.createdAt).toDateString()}/>
            })
            :
            <p className="text-red-500">there is no data yet</p>
          }
        </table>
        <div className="gap-5 flex absolute right-0 bottom-2 justify-end mr-3 mt-4 ">
        <button onClick={handlePrevPage} className="bg-primaryColor text-white rounded px-5 py-2">prev</button>
        <button onClick={handleNextPage} className="bg-primaryColor text-white rounded px-5 py-2">Next</button>
       </div>
          </div>
    </div>
    <ToastContainer />
    {/* </RootLayout> */}
    <div className="  absolute pb-4 bottom-0">
        <hr className="w-36 font-bold  mt-2 ml-12" />
        <h1 className="text-textColor mb-8 pl-12 text-3xl">  <i class="fa-solid mr-2 fa-school"></i> <span>SERCS</span></h1>
        
    </div>
</div>
    
   }
   export default Dashboard