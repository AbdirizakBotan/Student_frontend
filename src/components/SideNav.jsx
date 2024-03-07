import { NavLink } from "react-router-dom"
function SideNav(){


    const logOut = () =>{
        localStorage.clear()
      }
return <div className="bg-primaryColor  w-[16.9em] shadow-xl shadow-gray-400 transition-all duration-500 fixed h-screen">
 
<div className="pt-32  text-3xl flex flex-col text-textColor space-y-12 pl-8 ">

   <NavLink to="/dashboard"><i class="fa-brands pl-2 fa-microsoft"></i> Dashboard</NavLink>
   <NavLink to="/students"><i class="fa-solid   fa-chalkboard-user"></i> Students</NavLink>
   <NavLink to="/addStudents"><i class="fa-solid fa-user-plus"></i> Add Students</NavLink>
   <NavLink to="/complaints"><i class="fa-regular fa-envelope"></i> Complaints</NavLink>
   <NavLink to="/login" onClick={logOut}><i class="fa-solid fa-right-from-bracket"></i> Log Out</NavLink>
</div>
</div>
   
// </div>
// </div>
}
export default SideNav