import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik'

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  const  initialValues={
    title:"",
    content:"",   
  }


  function onSubmit(values) {
 
   axios.post("https://note-sigma-black.vercel.app/api/v1/notes",values,{
    Headers:{
      token:localStorage.getItem("token")
    }
   }).then(({data})=>{
      console.log(data)   
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
       <div className="container py-5">
      
      <div className="d-flex">
      <Button variant="primary" onClick={handleShow} className='ms-auto'>
       <i className="fa-solid fa-plus"></i> Add Note
      </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit}>
        <Form.Group className="mb-2"  controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control value={values.title} onChange={handleChange} name='title' type="text" placeholder="Enter Title" />   
          
        </Form.Group>

        <Form.Group className="mb-2"  controlId="formBasicName">
          <Form.Label>Content</Form.Label>
          <Form.Control value={values.content} onChange={handleChange}  name='content' type="text" placeholder="Enter Content" />   
         
        </Form.Group>
        </form>

        </Modal.Body>        
      </Modal>

       </div>
    </>
  )
}
