import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';
import { showModalLogin, showModalSignup } from '../store/actions/authModal'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'

function Navigation() {
	
	const authUser = useSelector( (state) => state.authModalReducer)
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
				<Link className="navbar-brand" to="/">BestOption</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto mr-auto navbar-color">
						<Link className="mr-3 nav-link" to="/">
							Home
						</Link>

						<NavDropdown className="mr-3" title="Caterigories" id="basic-nav-dropdown">
							<NavDropdown.Item className ="dark-color" href="">Home Services</NavDropdown.Item>
							<NavDropdown.Item className ="dark-color" href="">Housing Painting</NavDropdown.Item>
							<NavDropdown.Item className ="dark-color" href="">Gym</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className ="dark-color" href="">Hotels</NavDropdown.Item>
						</NavDropdown>
						<Link className="mr-3 nav-link" to="/business">
							Reviews
						</Link>
					</Nav>
					<div className="mr-auto">
						<div className="colors mr-3"><SearchIcon/></div>
					</div>
					<br />
						
					{ authUser.user ? 'USer' : (<>
						<div className="colors mr-3 log-btn" onClick={showModalLoginHandler}>
							Login
						</div>
				
					<br />
					<Nav.Item className="btn-primary mr-3 login-btn" onClick={showModalSignupHandler}>
						Sign Up
					</Nav.Item>

					</>
					)}
						
				</Navbar.Collapse>
				
			</Navbar>

		</>
	);
}
export default Navigation;
