import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
//import { Form } from 'react-bootstrap';
//import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import AuthPage from './AuthPage'
// import Login from './Login';
//import Signup from './Signup';
import { showModalLogin, showModalSignup } from '../store/actions/authModal'
import { useDispatch } from 'react-redux'

function Navigation() {

	const dispatch = useDispatch()

	const showModalLoginHandler = () => {
		dispatch(showModalLogin())
	}

	const showModalSignupHandler = () => {
		dispatch(showModalSignup())
	}

	return (
		<>
			<Navbar className="bg" variant="dark" expand="lg" fixed="top">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto mr-auto navbar-color">
						<Nav.Link className="mr-3" href="#home">
							Home
						</Nav.Link>
						<NavDropdown className="mr-3" title="Caterigories" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className="mr-3" href="#pricing">
							Reviews
						</Nav.Link>
					</Nav>
					<div className="mr-auto">
						<a className=" mr-3 login-btn">Events</a>
					</div>
					<br />

					<div className="">
						<Nav.Item className=" mr-3 log-btn" onClick={showModalLoginHandler}>
							Login
						</Nav.Item>
					</div>
					<br />
					<Nav.Item className="btn-primary mr-3 login-btn" onClick={showModalSignupHandler}>
						Sign Up
					</Nav.Item>

					<div></div>
				</Navbar.Collapse>
			</Navbar>

		</>
	);
}
export default Navigation;
