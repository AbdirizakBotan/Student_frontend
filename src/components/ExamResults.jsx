import { useState, useEffect } from "react"
import axios from "axios"
// import ExamData from "./ExamData"
import Website from "../pages/Website"
import { useParams } from "react-router-dom"

function ExamResults() {

    const [ID, setID] = useState("")
    const [result, setResult] = useState([])

    const [total, setTotalMarks] = useState()

    const params = useParams()

    const handleSearchID = (e) => {
        e.preventDefault()
        axios.post("https://student-backend-33if.onrender.com/search/frontend", {
            "ID": ID
        }).then((response) => {
            console.log(response.data)
           setResult(response.data.searchStudents)
           setTotalMarks(response.data.total[0].totalSum)
        }).catch((error) => {
            console.log(error)
        })
    }

    return <div>
        <Website />

        <div className="bg-[url('https://img.freepik.com/free-photo/customer-care-webpage-interface-word_53876-21212.jpg?size=626&ext=jpg')] bg-center bg-cover bg-no-repeat w-full h-screen">
            <div className="w-full h-screen backdrop-blur-sm">
                <div className="pt-[12%]  sm:ml-[34%] ml-10">
                    <form className="bg-primaryColor rounded  text-center h-[100px] sm:w-[450px] w-[300px]">
                        <label className="text-white text-2xl mt-8">Enter Your ID:</label><br></br>
                        <input value={ID} onChange={(id) => setID(id.target.value)} className="sm:w-[400px] w-[250px] outline-none h-10 p-3 rounded border-2 sm:ml-4 ml-2 mt-2" type="text" placeholder="Enter Your ID..." /><br></br>

                    </form>
                    <div className="bg-textColor shadow-xl shadow-gray-600 sm:w-[450px] w-[300px] sm:mb-4 mb-10 p-3 text-center">
                        <button onClick={handleSearchID} className=" px-6 text-2xl py-1 border-2 text-primaryColor  ">Search</button>
                    </div>
                   <div className=' rounded border-r border-l border-t   sm:ml-0 ml-0 bg-primaryColor text-textColor sm:w-[450px]   w-[300px]  flex  '>
   
                        {
                            result.map((data) => {

                                return <div>
                                    <h1 className='text-2xl pl-2  '><span>ID:</span>  {data.ID}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />
                                    <h1 className='text-2xl pl-2 '><span>Name:</span>  {data.name}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />
                                    <h1 className='text-2xl pl-2'><span className="mr-3">Class:</span>  {data.className}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />
                                    <h1 className='text-2xl pl-2 '><span>Html:</span>  {data.sub1}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />
                                    <h1 className='text-2xl pl-2  '><span>Css:</span>  {data.sub2}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />
                                    <h1 className='text-2xl pl-2  '><span>Js:</span>  {data.sub3}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />
                                    <h1 className='text-2xl pl-2 '><span>React Js:</span>  {data.sub4}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />
                                    <h1 className='text-2xl pl-2'><span>Total:</span>  {total}</h1>
                                    <hr className='w-[300px] sm:w-[450px] border-b-1 border-textColor' />

                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ExamResults