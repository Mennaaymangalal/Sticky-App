import React, { useContext, useState } from 'react'
import img from "../../assets/Image Apr 3, 2025, 01_11_06 PM.png"
import { Button, Form, Spinner } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext/AuthContext'

export default function Login() {
  const [isLoading , setIsLoading ] = useState(false)
  const [errMsg , setErrMsg ] = useState("")
  const {setIsLoggedIn}  = useContext(authContext)


 const navigate = useNavigate()
 
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

const validationSchema = Yup.object({
  email:Yup.string().required("Email Is Required").email("Invalid Email"),
  password:Yup.string().required("Password Is Required"), 
})

 const {values , handleChange , handleSubmit , errors , touched , handleBlur} = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <>    
     <div className="container my-5 ">     
      <div className="d-flex flex-column flex-md-row">
        <div className="col-md-6">
          <img src={img} alt="image" className="img-fluid w-100 h-auto"/>
        </div>
        <div className="col-md-6">
          {/* Form */}
       <form onSubmit={handleSubmit} action="">
       <h4 className='mb-2'>Login Now :</h4> 

          {/* Email Input */}
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={values.email}  onBlur={handleBlur} onChange={handleChange} name='email'  type="email" placeholder="Enter email" />
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

 
          {/* Submit Button */}
          <Button disabled={isLoading} variant="primary" type="submit">
            {
              isLoading && ( <Spinner animation="border" size="sm" role="status" className="me-2" />)
            }
          Submit
        </Button>
       
        {/* Error Message */}
        {
          errMsg && (<p className='text-danger fa-s pt-2'>{errMsg}</p>)
        }
       </form>
        </div>
      </div>
     </div>
    </>
  )
}
