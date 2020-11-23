import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react';
import { Form, Button } from 'react-bootstrap';
import Logo from './Logo'
import LoginForm from './LoginForm'

function Login(props) {
	const { email, setUser } = useState();
	const { password, setPassword } = useState();

	const Signin = (e) => {
		e.preventDefault();
	};
	return (
		<Modal show={props.show} onHide={props.handleClose}>
		<Modal.Dialog style={{margin: 0}}>
			<Modal.Header closeButton>
				<Logo />
			</Modal.Header>

			<Modal.Body>
				{/* <Route exact path={`${path}/login`} component={LoginForm}/>
							<Route exact path={`${path}/signup`} component={SignUp}/> */}
				<LoginForm/>
				{/* <SignUp /> */}
			</Modal.Body>

			</Modal.Dialog>
		</Modal>
	);
}
export default Login;
