import { Route, Routes } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard"
import Students from "./pages/StudentsDisplay"
import Login from "./pages/Login";
import Complaints from "./pages/Complaints"
import StudentForm from "./components/StudentForm"
import UpdateStudent from "./components/UpdateStudent";
import Website from "./pages/Website";
import ComplaintForm from "./components/ComplaintForm";
import ExamResults from "./components/ExamResults";
import View from "./pages/View";
function App() {

  return <>
    <Routes>
      <Route path="/" element={<ExamResults />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/addStudents" element={<StudentForm />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/updateStudent/:id" element={<UpdateStudent />} />
      <Route path="/AddComplaint" element={<ComplaintForm />} />
      <Route path="/ExamResults" element={<ExamResults />} />
      <Route path="/view/:id" element={<View/>}/>
    </Routes>

   <Routes>
        <Route path="/login" element={<Login />} />
    </Routes>
  </>

}

export default App
