import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Note({note , deleteNote , getUserNotes}) {  
   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const  initialValues={
      title:"",
      content:"",   
    }
    function onSubmit(values) { 
     axios.put(`https://note-sigma-black.vercel.app/api/v1/notes/${note._id}`,values,{
      headers:{
        token:`3b8ny__${localStorage.getItem("token")}`
      }
     }).then(({data})=>{
        getUserNotes()         
     }).catch((err)=>{
      console.log(err)
     }).finally(()=>{
      
     })
    }
     const {values , handleChange , handleSubmit} = useFormik({
        initialValues,
        onSubmit,     
      })
  



  return (
    <>
     <div className="col-3 py-4">
     <Card>
      <Card.Header className='fw-semibold'>{note.title}</Card.Header>
      <Card.Body>        
        <Card.Text>
        {note.content}
        </Card.Text>
       <div className="d-flex justify-align-content-around">
       <Button onClick={()=>deleteNote(note._id)} className='bg-transparent text-danger border-0'> <i className="fa-solid fa-trash"></i></Button>
       <Button  onClick={handleShow} className='bg-transparent text-primary border-0'> <i className="fa-solid fa-pen-to-square"></i></Button>
       </div>
      </Card.Body>
    </Card>
     </div>

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2"  controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control value={values.title} onChange={handleChange} name='title' type="text" placeholder="Enter Title" />   
          
        </Form.Group>

        <Form.Group className="mb-2"  controlId="formBasicName">
          <Form.Label>Content</Form.Label>
          <Form.Control value={values.content} onChange={handleChange}  name='content' type="text" placeholder="Enter Content" />   
         
        </Form.Group>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' onClick={handleClose} variant="primary">Update Note</Button>
        </Modal.Footer>
        </Form>

        </Modal.Body>
        
      </Modal>
    </>
  )
}
