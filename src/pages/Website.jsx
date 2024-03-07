import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Hero from "./Hero"
function Website(){
    return <div>
        <div className="bg-primaryColor flex justify-between   items-center h-16 shadow-xl shadow-gray-400  text-textColor sm:text-4xl text-2xl  border-sky-400 pb-2">
         <Link to="/"><h1 className="sm:mb-1  font-semibold  sm:ml-4 ml-2 mt-4">SERCS</h1></Link>
<Link to="/AddComplaint" className="sm:ml-[15%] ml-4 flex sm:text-2xl  p-2 sm:mt-4 mt-2 rounded  sm:mb-4"><i class="fa-solid mt-2 mr-2 fa-box-tissue"></i> <span className="mt-1">Complaints</span></Link>
<Link to="/ExamResults" className="sm:text-2xl     sm:mt-4 mt-2 p-2  sm:mr-2 mr-4 rounded  sm:mb-4"><i class="fa-solid sm:mt-1 mt-3   fa-chalkboard-user"></i> <span className="">Exam</span></Link>
        </div>
    </div>
}
export default Website