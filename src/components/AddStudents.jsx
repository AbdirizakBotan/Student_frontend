
import { Link } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
function addStudents(){
return <div>
     <RootLayout>
     <div className="ml-64 pt-6">
     <Link to="/studentForm" className="text-3xl text-white  bg-green-500  h-10 px-6 py-2 rounded-lg">Add Student</Link>
     </div>
     </RootLayout>
</div>
}
export default addStudents