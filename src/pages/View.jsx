import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SideNav from '../components/SideNav';
function View ()  {
    const [ID , setID] = useState()
    const [name , setName] = useState()
    const [className , setClassName] = useState()
    const [sub1 , setSub1] = useState()
    const [sub2 , setSub2] = useState()
    const [sub3 , setSub3] = useState()
    const [sub4 , setSub4] = useState()
    const [totalMarks ,setTotalMarks] = useState()
 
    const params = useParams()
        const handleGetMarks = () =>{
            axios.get(`https://student-backend-33if.onrender.com/marks/total/${params.id}`).then((res)=>{
                setID(res.data.exam[0].ID)
                setName(res.data.exam[0].name)
                setClassName(res.data.exam[0].className)
                setSub1(res.data.exam[0].sub1)
                setSub2(res.data.exam[0].sub2)
                setSub3(res.data.exam[0].sub3)
                setSub4(res.data.exam[0].sub4)
                console.log(res.data)
                setTotalMarks(res.data.total[0].totalSum)
                // setStudents(res.data.exam)
            }).catch((error) =>{
                console.log(error)
            })
        }

useEffect(()=>{
handleGetMarks()
},[])
   

    return  <div>
         <SideNav/> 
         <div className="absolute top-5">
        
        <h1 className="text-textColor  pl-12 text-3xl">  <i class="fa-solid mr-2  fa-school"></i> <span>SERCS</span></h1> 
        <hr className="w-36 ml-12" />
        </div>
        <div className=" bg-textColor mb-32 rounded shadow-xl h-16 shadow-gray-300  p-3">
     <h1 className="text-4xl text-center  font-semibold text-primaryColor">Students Exam Results</h1>
        </div>
    <div className=' border-2  ml-[40%] bg-primaryColor w-[260px] border-text-color text-white flex '>
            <div className='border-r-2    border-textColor'>
            <h1 className='text-2xl pl-4'>ID</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>Name</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>Class</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>Html</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>Css</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>Js</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>React js</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>Total</h1>
            </div>

          {
            
             <div>
            <h1 className='text-2xl pl-4'>{ID}</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl '>{name}</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4 '>{className}</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4 '>{sub1}</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4 '>{sub2}</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4 '>{sub3}</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4 '>{sub4}</h1>
            <hr className='w-32 border-b-2 border-textColor'/>
            <h1 className='text-2xl pl-4'>{totalMarks}</h1>
            {/* <hr className='w-32 border-b-2 border-green-500'/> */}
           
            </div>
       
          }
          
        </div>
        <div className="  absolute pb-4 bottom-0">
        <hr className="w-36 font-bold  mt-2 ml-12" />
        <h1 className="text-textColor mb-8 pl-12 text-3xl">  <i class="fa-solid mr-2 fa-school"></i> <span>SERCS</span></h1>
        
    </div>
    </div>
}

export default View
