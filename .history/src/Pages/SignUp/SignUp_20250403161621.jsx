import React from 'react'
import img from "../../assets/Image Apr 3, 2025, 01_11_06 PM.png"
import { Button, Form } from 'react-bootstrap'
import { ErrorMessage, useFormik } from 'formik'

export default function SignUp() {
 
  const  initialValues={
    "name":"mohamedali",
    "email":"mohamedali9999999999@gmail.com",
    "password":"A123",
    "age":24,
    "phone":"01022734542"
  }

  function onSubmit() {
   console.log(values)
  }

 const {values , handleChange , handleSubmit , errors} = useFormik({
    initialValues,
    onSubmit,
    // validationSchema,
  })

  return (
    <>    
     <div className="container my-4 ">     
      <div className="d-flex flex-column flex-md-row">
        <div className="col-md-6">
          <img src={img} alt="image" className="img-fluid w-100 h-auto"/>
        </div>
        <div className="col-md-6">
          {/* Form */}
       <form onSubmit={handleSubmit} action="">
       <h4 className='mb-2'>Register Now :</h4> 

        {/* Name Input */}
        <Form.Group className="mb-3"  controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control  value={values.name} onChange={handleChange} name='name' type="text" placeholder="Enter Name" />   
          <ErrorMessage name="name" component="div" className="text-danger" />      
        </Form.Group>

         {/* Email Input */}
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={values.email} onChange={handleChange} name='email'  type="email" placeholder="Enter email" />         
        </Form.Group>

           {/* Password Input */}
           <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={values.password} onChange={handleChange} name='password'  type="password" placeholder="Password" />
        </Form.Group>

         {/* Age Input */}
         <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control value={values.age} onChange={handleChange} name='age'  type="text" placeholder="Enter Age" />         
        </Form.Group>
         {/* Phone Input */}
         <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control value={values.phone} onChange={handleChange} name='phone'  type="text" placeholder="Enter Phone" />         
        </Form.Group>
          {/* Submit Button */}
          <Button variant="primary" type="submit">
          Submit
        </Button>
       </form>
        </div>
      </div>
     </div>
    </>
  )
}
