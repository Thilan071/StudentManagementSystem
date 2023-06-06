import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentManagement from './Components/StudentManagement';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import DeleteStudent from './Components/DeleteStudent'
import students from './Constant/student.json';
import { useEffect } from 'react';




function App() {
  const saveStudents = () => {
      localStorage.setItem('students',JSON.stringify(students))
  
  }
    useEffect(()=>{
      console.log("Type",students)
      saveStudents()
    },[])
  return(
    <div>
    <StudentManagement></StudentManagement>
{/* <AddStudent></AddStudent> */}
{/* <EditStudent></EditStudent> */}
{/* <DeleteStudent></DeleteStudent> */}
    </div>
  );
}

export default App;
