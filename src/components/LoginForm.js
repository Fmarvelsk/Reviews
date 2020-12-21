import React, { useState } from 'react';
import { Form, Button, Modal, Spinner } from 'react-bootstrap';
import googleLogo from '../image/google_logo.png';
import '../styles/login.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
	const [isloading, loading] = useState(false)
	const history = useHistory ()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [error, setError] = useState()
	const Signin = (e) => {
		const info = {
			email: email,
			password: password
		}
		e.preventDefault()
		loading(true)
		const dbUser = async() => {
				const response = await axios({
					method: "post",
					headers: { 'Content-Type' : 'application/json'},
					data: info,
					url: "https://dev-bestops.herokuapp.com/v1/login"
	}).then(token => {	
		
		setTimeout(() => {
			setEmail('')
			setPassword('')
		history.push('/profile')
		
		}, 2000);
			
		
	}).catch( err => {
		setTimeout(() => {
		loading(false);
		setPassword('')
		setError("Invalid email and Password")
		  }, 2000);
		
	})
		}

		dbUser()
	}
	return (
		<>
			<Modal.Title id="login-modal-title"><span>e</span> Welcome</Modal.Title>
		<div className="red text-center">{error}</div>
			<Form id="login-form" onSubmit={Signin} >
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" 
					onChange = { e => setEmail(e.target.value)}
					required/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword" id="form-group-login-password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange = { e => setPassword(e.target.value)}
					required/>
				</Form.Group>
				<Form.Text id="forgot-password">Forgot Password</Form.Text>
				<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button" disabled={isloading}>
						{isloading ? (<><Spinner animation="border" variant="primary"/>
						 <span className="sr-only">Loading...</span></>
						 ) :'Login' }  
					</Button>
				</div>
				</Form>
			<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button-google">
						<div className="google-button-text">
							<img src={googleLogo} alt="" />
							<span>Continue with Google</span>
						</div>
					</Button>
				</div>
				<Form.Text>
					Dont have an account? <span className="acc">Sign Up</span>
				</Form.Text>	
		</>
	);
}
