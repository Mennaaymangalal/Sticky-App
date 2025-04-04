import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  const  initialValues={
    "email":"mohamedali9999999999@gmail.com",
    "password":"A123",   
  }


  function onSubmit(values) {
    setIsLoading(true)
    setErrMsg("")
   axios.post("https://note-sigma-black.vercel.app/api/v1/users/signIn",values).then(({data})=>{
    if(data.msg = "done"){
      setIsLoggedIn(true)
      localStorage.setItem("token" , data.token)
      navigate("/")
    }
   
   }).catch((err)=>{
    setErrMsg(err.response.data.msg)
   }).finally(()=>{
    setIsLoading(false)
   })
  }


   const {values , handleChange , handleSubmit } = useFormik({
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

        <form>
        <Form.Group className="mb-2"  controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control  name='title' type="text" placeholder="Enter Title" />   
          
        </Form.Group>

        <Form.Group className="mb-2"  controlId="formBasicName">
          <Form.Label>Content</Form.Label>
          <Form.Control  name='content' type="text" placeholder="Enter Content" />   
         
        </Form.Group>
        </form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add Note</Button>
        </Modal.Footer>
      </Modal>

       </div>
    </>
  )
}
