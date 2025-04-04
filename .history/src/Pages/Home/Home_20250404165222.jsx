import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik'
import axios from 'axios';
import Note from '../Note/Note';

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userNote , setUserNote ] = useState(null)

  const [errorf , setErrorf] = useState(false)

  
  const  initialValues={
    title:"",
    content:"",   
  }
  function onSubmit(values) { 
   axios.post("https://note-sigma-black.vercel.app/api/v1/notes",values,{
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

    function getUserNotes(){
      axios.get("https://note-sigma-black.vercel.app/api/v1/notes",{
        headers:{
            token:`3b8ny__${localStorage.getItem("token")}`
        }
      }).then((data)=>{
        setErrorf
        setUserNote(data.data.notes)
      }).catch((err)=>{
       console.log(err)
      })
    }
    useEffect(()=>{
      getUserNotes()
    },[])

    function deleteNote(id){
      axios.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,{
        headers:{
          token:`3b8ny__${localStorage.getItem("token")}`
        }}).then((res)=>{
          getUserNotes()
        }).catch((err)=>{         
          console.log(err)         
        })
    }
  

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

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' onClick={handleClose} variant="primary">Add Note</Button>
        </Modal.Footer>
        </form>

        </Modal.Body>
        
      </Modal>

      <div className="row">
      {
        userNote?.map((notes , index)=>(<Note deleteNote={deleteNote} note={notes} key={index}/>))
      }
      </div>

     

       </div>
    </>
  )
}
