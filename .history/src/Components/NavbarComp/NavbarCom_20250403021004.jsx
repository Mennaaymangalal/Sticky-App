import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/notelogo.png'
import { NavLink } from 'react-router-dom';

export default function  NavbarCom() {
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
          
          
          <Nav className="ms-auto d-flex gap-2">
          <NavLink to={"note"}>
          <div className="text-start">
            <i class="fa-solid fa-box-open text-white mb-0"></i>
            </div>
          </NavLink>
          <NavLink to={'login'} className=" text-white text-start text-decoration-none">
           <p className='mb-0 fw-semibold'>Logout</p>           
          </NavLink>
           </Nav>


          <Nav>
            <Nav.Link href="" className='d-flex gap-3'>
              <i class="fa-brands fa-facebook-f text-white"></i>
              <i class="fa-brands fa-twitter text-white"></i>
              <i class="fa-brands fa-instagram text-white"></i>
              </Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

