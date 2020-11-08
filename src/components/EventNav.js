import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';

function NavEvent () {
    return (
     <Navbar className="bgEvent" variant="light" bg="light" expand="lg">
    <Navbar.Brand className="dark-color" href="#home">Navbar</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-auto navbar-color">
      <br/>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button  variant="outline-dark">Search</Button>
    </Form>
      </Nav>
    <Nav.Link className="dark-color mr-3" href="#home">Reviews</Nav.Link>
    <Nav.Link className="dark-color mr-3" href="#home">How it works</Nav.Link>
    <Nav.Link className="dark-color mr-3" href="#home">Contact</Nav.Link> 
      <div>
      
</div>
     </Navbar.Collapse>
    </Navbar>
    
     )
}
export default NavEvent;