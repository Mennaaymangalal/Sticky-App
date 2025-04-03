import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/notelogo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../Contexts/AuthContext/AuthContext';
import { Button } from 'react-bootstrap';

export default function  NavbarCom() {

 const {IsLoggedIn , setIsLoggedIn} = useContext(authContext)
 const navigate = useNavigate()

 function logout(){
  setIsLoggedIn(false)
  localStorage.removeItem("token")  
  navigate("/login")
 } 

  return (
    // bg-body-tertiary
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container>
      
        <Navbar.Brand className='text-white fw-bold' href="#home">
        <img src={logo} alt=""   style={{ width: '40px', height: '40px' }} />
          Sticky App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav" >
          

          {
            IsLoggedIn ? 
            <Nav className="ms-auto d-flex align-items-center gap-2">
               <NavLink to={"note"}>
            <div className="">
            <i className="fa-solid fa-box-open text-white "></i>
            </div>
          </NavLink>
          <Nav  className=" text-white text-start text-decoration-none ">
           <Button onClick={logout} className=' fw-semibold'>Logout</Button>           
          </Nav>
            </Nav> :
            <Nav className="ms-auto d-flex gap-2">
          <NavLink to={'signup'} className=" text-white text-start text-decoration-none">
           <p className='mb-0 fw-semibold'>Register</p>           
          </NavLink>
          <NavLink to={'login'} className=" text-white text-start text-decoration-none">
           <p className='mb-0 fw-semibold'>Login</p>           
          </NavLink>
         
           </Nav>

          }
          
          


          <Nav>
            <Nav.Link href="" className='d-flex gap-3'>
              <i className="fa-brands fa-facebook-f text-white"></i>
              <i className="fa-brands fa-twitter text-white"></i>
              <i className="fa-brands fa-instagram text-white"></i>
              </Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

