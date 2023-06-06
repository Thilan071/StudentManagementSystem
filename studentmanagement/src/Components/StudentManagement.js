import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import students from '../Constant/student.json';
import { useEffect, useState } from 'react';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import DeleteStudent from './DeleteStudent';

function StudentManagement(){
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')))
 
  useEffect(()=>{
    // setStudents(JSON.parse(localStorage.getItem('students')))
    console.log("updated",JSON.parse(localStorage.getItem('students')))

    // const handleStorageChange = () => {
    //   setStudents(JSON.parse(localStorage.getItem('students')))
    // };

    // window.addEventListener('storage', handleStorageChange);
    window.onstorage = () =>{
      setStudents(JSON.parse(localStorage.getItem('students')))
    }

    // return () => {
    //   window.removeEventListener('storage', handleStorageChange);
    // };

  },[JSON.parse(localStorage.getItem('students'))])

return(

    <div className="App">
    <h1 className='d-flex justify-content-center header-background'>Student Management System</h1>
    <div className='d-flex justify-content-end'>
 <AddStudent></AddStudent>
    </div>
    <Table striped bordered hover>
    <thead> 
     <tr>
       <th>Student ID</th>
       <th>Name</th>
       <th>Phone #</th>
       <th>Address</th>
       <th>Action</th>
     </tr>
     </thead>
      <tbody>
      {
    students.map((student)=>{

        return(
            <tr>
            <td>{student.student_id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>
               {student.address}
              </td>
             <EditStudent student = {student}></EditStudent>
                
             <DeleteStudent></DeleteStudent>
             </tr>
        )
    }
    )
}
      
       </tbody>
    
    </Table>



   </div>
   

);


}
export default StudentManagement;