import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import googleLogo from '../image/google_logo.png';

function Signup(props) {
	const { email, setUser } = useState();
	const { password, setPassword } = useState();

	const Signin = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<Modal.Title id="login-modal-title">Join millions of people sharing their experience</Modal.Title>
			<Form id="login-form">
				<Form.Row className="align-items-center">
					<Col xs={12} sm={6} md={6}>
						<Form.Group>
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Mia" />
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6}>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Khalifa" />
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Row className="align-items-center">
					<Col xs={12}>
						<Form.Group controlId="formBasicEmail" id="form-group-signup-email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Form.Group controlId="formBasicPassword" id="form-group-signup-password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$"
								onInvalid="this.setCustomValidity('Password needs 6-20 characters with at least one number')"
								onInput="this.setCustomValidity('')"
							/>
						</Form.Group>
					</Col>
				</Form.Row>

				<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button">
						Sign Up
					</Button>
				</div>
				<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button-google">
						<div className="google-button-text">
							<img src={googleLogo} alt="" />
							<span>Sign up with Google</span>
						</div>
					</Button>
				</div>
				<Form.Text id="no-account">
					Already have an account? <span>Sign In</span>
				</Form.Text>
			</Form>
		</>
	);
}
export default Signup;
