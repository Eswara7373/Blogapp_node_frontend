import React from "react";
import { NavLink } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
 
     

<>

<div className="container">
    <div className="logo">
      <p className="vlogo h1 ">The</p>
      <h1 className="head "> Siren</h1>
    </div>
    </div>
      <Navbar bg="white" expand="lg" className="navbar">
     

      <Container >
      <div className="res-logo">
          <p className="h6 vlogo">The</p>
          <h3 className="head4"> Siren</h3>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" className="mt-3" /> 
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '250px',textAlign:"center" }}
            navbarScroll
          >
             <ul className="navbar-nav"r>
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link nav-linker ">   Home    </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bollywood" className="nav-link nav-linker ">  Bollywood   </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/technology" className="nav-link nav-linker ">   Technology   </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/hollywood" className="nav-link nav-linker ">   Hollywood    </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fitness" className="nav-link nav-linker ">   Fitness    </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/food" className="nav-link  ms-5 me-5">   Food    </NavLink>
            </li>
          </ul>
          </Nav>
        
        </Navbar.Collapse>
      
      </Container>
     
    </Navbar>
     <div className="container">
     <hr className="nav-hr"/>
     </div>
</>


     
   
  );
}
