import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentManagement from './Components/StudentManagement';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import DeleteStudent from './Components/DeleteStudent'



function App() {
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
