import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import students from '../Constant/student.json';

const EditStudent = ({student}) => {

    const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')))
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

const EditToSaveStudent = () => {
let newStudents = [...students, {
    "name": name,
    "phone":phone,
    "address": address,
  }]
    
  localStorage.setItem('students',JSON.stringify(newStudents))
  console.log(name,phone,address);
  console.log("saved",JSON.parse(localStorage.getItem('students')))

  
}    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
  Edit Student      </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ID</Form.Label>
                
                <Form.Control
                  type="text"
                  autoFocus
                  defaultValue={student.student_id}
                  disabled = {true}
                />

<Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                
                <Form.Control
                  type="text"
                  autoFocus
                  defaultValue={student.name}
                  onChange={(event)=>{setName(event.target.value)}}

                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                
              </Form.Group>
            </Form>  
                
            
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                
              </Form.Group>
              
            </Form>
           
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                
                <Form.Control
                  type="text"
                  autoFocus
                  defaultValue={student.phone}
                  onChange={(event)=>{setPhone(event.target.value)}}


                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
           
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address</Form.Label>
                
                <Form.Control
                  type="text"
                  autoFocus
                  defaultValue={student.address}
                  onChange={(event)=>{setAddress(event.target.value)}}


                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
           
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Gender</Form.Label>
                
                <Form.Control
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
           
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={EditToSaveStudent}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

}

export default EditStudent;