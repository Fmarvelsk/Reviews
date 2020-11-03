import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
//import { Form } from 'react-bootstrap';
//import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Login from './Login';
//import Signup from './Signup';


function Navigation (){
    return(
        <>
    <Navbar className="bg" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-auto navbar-color">
      <Nav.Link className="mr-3" href="#home">Home</Nav.Link>
      <NavDropdown className="mr-3" title="Caterigories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className="mr-3" href="#pricing">Reviews</Nav.Link>
    </Nav>
    <div className="">
        <Button className="mr-5">Events</Button>

    </div><br/>
    <div class="js-signin-modal-trigger">
      <button className="mr-3 pl-2 login-btn" href="#0" data-signin="login">Login
      </button>
      </div>
      <Button href="#0" data-signup="signup">Signup</Button>
      
      <div>
      
</div>
     </Navbar.Collapse>
    </Navbar>
    
    <Login />
   
        </>
    )

}
export default Navigation;