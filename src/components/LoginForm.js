import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import googleLogo from '../image/google_logo.png';
import '../styles/login.css'

export default function LoginForm() {
	const LoginSubmit = (e) => {
		e.preventDefault()
		
	}
	return (
		<>
			<Modal.Title id="login-modal-title"><span>e</span> Welcome</Modal.Title>
			<Form id="login-form" onClick={LoginSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group controlId="formBasicPassword" id="form-group-login-password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$"
						onInvalid="this.setCustomValidity('Password needs 6-20 characters with at least one number')"
						onInput="this.setCustomValidity('')"
					/>
				</Form.Group>
				<Form.Text id="forgot-password">Forgot Password</Form.Text>
				<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button">
						Log In
					</Button>
				</div>
				<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button-google">
						<div className="google-button-text">
							<img src={googleLogo} alt="" />
							<span>Continue with Google</span>
						</div>
					</Button>
				</div>
				<Form.Text id="no-account">
					Dont have an account? <span>Sign Up</span>
				</Form.Text>
			</Form>
		</>
	);
}
