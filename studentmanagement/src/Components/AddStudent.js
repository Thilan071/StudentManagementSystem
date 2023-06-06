import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {v4 as uuidv4} from 'uuid';

function AddStudent(){
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')))
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {

    let newStudents = [...students, {
      "student_id": "1111",
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
Add Student      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              
              <Form.Control
                type="text"
                autoFocus
                defaultValue={name}
                onChange={(event)=>{setName(event.target.value)}}
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
              <Form.Label>Phone Number</Form.Label>
              
              <Form.Control
                type="text"
                autoFocus
                defaultValue={phone}
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
                defaultValue={address}
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
          <Button variant="primary" onClick={handleSave}>

            Save Changes
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );


}
export default AddStudent;