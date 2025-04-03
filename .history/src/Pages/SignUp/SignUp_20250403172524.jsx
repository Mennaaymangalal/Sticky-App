import React from 'react'
import img from "../../assets/Image Apr 3, 2025, 01_11_06 PM.png"
import { Button, Form } from 'react-bootstrap'
import { ErrorMessage, useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'

export default function SignUp() {
 
  const  initialValues={
    "name":"mohamedali",
    "email":"mohamedali9999999999@gmail.com",
    "password":"A123",
    "age":24,
    "phone":"01022734542"
  }

  function onSubmit(values) {
   axios.post("https://note-sigma-black.vercel.app/api/v1/users/signUp",values).then(({data})=>{
    console.log(data)
   }).catch((err)=>{
    console.log(err)
   }).finally(()=>{
    
   })
  }

const validationSchema = Yup.object({
  name: Yup.string().required("Name Is Required").min(3,"Name Must be at Least 3 Characters").max(20,"Name Must be at Most 20 Characters"),
  email:Yup.string().required("Email Is Required").email("Invalid Email"),
  password:Yup.string().required("Password Is Required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'),
  age:Yup.string().required("Age is required").matches(/^(1[89]|[2-9]\d)$/,"Age must be a number"),  
  phone: Yup.string().required("Phone is required").matches(/^(01)[0-9]{9}$/,"Phone must start with 01 and be 11 digits")  
})

 const {values , handleChange , handleSubmit , errors , touched , handleBlur} = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
          <Form.Control value={values.name} onBlur={handleBlur} onChange={handleChange} name='name' type="text" placeholder="Enter Name" />   
          {touched.name && errors.name && (
          <div className="text-danger">{errors.name}</div>
            )}
        </Form.Group>

         {/* Email Input */}
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  onBlur={handleBlur} onChange={handleChange} name='email'  type="email" placeholder="Enter email" />
          {
           touched.email && errors.email &&(
            <div className="text-danger">{errors.email}</div>
           )
          }         
        </Form.Group>

           {/* Password Input */}
           <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  onBlur={handleBlur} onChange={handleChange} name='password'  type="password" placeholder="Password" />
          {
            touched.password && errors.password && (
              <div className="text-danger">{errors.password}</div>
            )
          }
        </Form.Group>

         {/* Age Input */}
         <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control  onBlur={handleBlur} onChange={handleChange} name='age'  type="text" placeholder="Enter Age" />    
          {
            touched.age && errors.age &&
            (
              <div className="text-danger">{errors.age}</div>
            )
          }     
        </Form.Group>

         {/* Phone Input */}
         <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control  onBlur={handleBlur} onChange={handleChange} name='phone'  type="text" placeholder="Enter Phone" />    
          {
            touched.phone && errors.phone &&
            (
              <div className="text-danger">{errors.phone}</div>
            )
          }     
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
