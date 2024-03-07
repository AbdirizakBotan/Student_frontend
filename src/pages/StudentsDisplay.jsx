import StudentData from "../components/StudentData"
import { useState,useEffect } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import SideNav from "../components/SideNav";
function StudentsDisplay(){
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
    },[])


const handleSearchStudent = (id)=>{ 

    let key = id.target.value

    if(key){

        axios.get(`https://student-backend-33if.onrender.com/search/student/${key}`).then((res)=>{
            setGetData(res.data) 
        }).catch((error)=> console.log(error))
    }
    else {
        handleGetStudents()
    }
}

 
return <div>
    {/* <RootLayout> */}
    <SideNav />
    <div className="absolute top-5">
        
    <h1 className="text-textColor  pl-12 text-3xl">  <i class="fa-solid mr-2  fa-school"></i> <span>SERCS</span></h1> 
    <hr className="w-36 ml-12" />
    </div>
    <div className="ml-[17.3em]   mr-1">
    <div className=" bg-textColor rounded shadow-xl h-16 shadow-gray-300  p-3">
     <h1 className="text-4xl text-center  font-semibold text-primaryColor">Students Exam Results</h1>
        </div>
        <input onChange={handleSearchStudent}  type="text"placeholder="Search..."className="text-sm text-textColor bg-primaryColor focus:outline-none active:outline-none  sm:w-[24rem]  h-10 pl-11 pr-4 mt-8 mb-3 rounded-sm"/>
        <table className="table-auto  rounded bg-primaryColor text-textColor   w-[1084px] ">
          <thead className=" border-b-2 border-white  text-textColor  ">
           <tr className=" text-center  rounded  text-textColor   font-medium">
            <th className="py-2 p-3">ID</th>
            <th className="py-2 p-2">Name</th>
           <th className="py-2  p-2">ClassName</th>
           <th className="py-2  p-2">Html</th>
           <th className="py-2  p-2">Css</th>
           <th className="py-2  p-2">JS</th>
           <th className="py-2  p-2">React Js</th>
           <th className="py-2  p-2 ">Date</th>
           <th className="py-2  p-2  ">Options</th>
           <th className="py-2  p-2  ">View</th>
           </tr>
          </thead>
          {
           data.length > 0 ? data.map((data)=>{
            return <StudentData handleDelete={  ()=> {deleteTeacher(data._id)}} id={data._id} ID={data.ID}  name={data.name} className={data.className} sub1={data.sub1} sub2={data.sub2} sub3={data.sub3} sub4={data.sub4} date={new Date(data.createdAt).toDateString()}/>
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
    <ToastContainer />
    {/* </RootLayout> */}

    <div className="  absolute pb-4 bottom-0">
        <hr className="w-36 font-bold  mt-2 ml-12" />
        <h1 className="text-textColor mb-8 pl-12 text-3xl">  <i class="fa-solid mr-2 fa-school"></i> <span>SERCS</span></h1>
        
    </div>
</div>
}
export default StudentsDisplay

