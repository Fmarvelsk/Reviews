import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { showModalLogin, showModalSignup } from '../store/actions/authModal'
import { useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'

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
				<Navbar.Brand href="/">Navbar</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto mr-auto navbar-color">
						<Nav.Link className="mr-3" href="/">
							Home
						</Nav.Link>
						<NavDropdown className="mr-3" title="Caterigories" id="basic-nav-dropdown">
							<NavDropdown.Item className ="dark-color" href="#action/3.1">Home Services</NavDropdown.Item>
							<NavDropdown.Item className ="dark-color" href="#action/3.2">Housing Painting</NavDropdown.Item>
							<NavDropdown.Item className ="dark-color" href="#action/3.3">Gym</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className ="dark-color" href="#action/3.4">Hotels</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className="mr-3" href="/">
							Reviews
						</Nav.Link>
					</Nav>
					<div className="mr-auto">
						<div className="colors mr-3"><SearchIcon/></div>
					</div>
					<br />

					<div>
						<div className="colors mr-3 log-btn" onClick={showModalLoginHandler}>
							Login
						</div>
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
