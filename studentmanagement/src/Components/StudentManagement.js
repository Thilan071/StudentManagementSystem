import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import students from '../Constant/student.json';
import { useEffect } from 'react';

function StudentManagement(){

return(

    <div className="App">
    <h1 className='d-flex justify-content-center header-background'>Student Management System</h1>
    <div className='d-flex justify-content-end'>
<button className='btn btn-success'>Add Student</button>
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
    students.map(student=>{

        return(
            <tr>
            <td>{student.student_id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>
               {student.address}
              </td>
              <Button className='m-1 btn btn-light'>Edit</Button>
                
                <Button className='m-2 btn btn-light'>Delete</Button>
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