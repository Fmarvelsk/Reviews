import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import googleLogo from '../image/google_logo.png';
//import axios from 'axios'
import { useHistory } from 'react-router-dom';

function Signup() {
	const history = useHistory();
	const [firstname, setUsername] = useState(),
		[lastname, setLastname] = useState(),
		[email, setUser ]  = useState(),
		 [password, setPassword ] = useState(),
		 [error, setError] =  useState(""),
		 [errorPassword, setErrorPassword] = useState(""),
		 [userError, setUserError] = useState("") 
		 
		 
		const validatePassword = (e) => {
			const patt =new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$')
			if(e.target.value === undefined || e.target.value === '' || patt.test(e.target.value) || e.target.value.length < 6){
				setErrorPassword("Password needs 6-20 characters with at least one number")
					
			}
			else {
				setPassword(e.target.value)
				setErrorPassword("")
				}
		
		}
		
		 
	const SigninBtn = (e) => {
		e.preventDefault()
		const info = {
			firstname : firstname,
			lastname : lastname,
			email : email,
			password : password
		};
		
					/*const dbUrl = async() => {
						const response = await axios({
							method: "post",
							headers: { 'Content-Type' : 'application/json'},
							data: info,
							url: "https://dev-bestops.herokuapp.com/v1/signup"
			
						}).then( response => {
							
							setErrorPassword('')
							history.push('/profile')
							console.log(response.data)
						}).catch(err => 
							setUserError("Email already exist")
							 
						)
					}
					dbUrl()*/
		
		
		}
		
		
	return (
		<>
			<Modal.Title id="login-modal-title">Join millions of people sharing their experience</Modal.Title>
			<div className="red text-align">{userError}</div>
			<Form id="login-form" onSubmit={SigninBtn}>
				<Form.Row className="align-items-center">
					
					<Col xs={12} sm={6} md={6}>
						<Form.Group>
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Mia" onChange={e => setUsername(e.target.value)} required/>
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6}>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Khalifa" onChange={ e => setLastname(e.target.value)} required/>
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Row className="align-items-center">
					<Col xs={12}>
						<Form.Group controlId="formBasicEmail" id="form-group-signup-email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" onChange={ e=> setUser(e.target.value)}/>
								<div className="red"> {error}</div>
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Form.Group controlId="formBasicPassword" id="form-group-signup-password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								maxLength="20"
								onChange = {validatePassword}
								
								/>
								<div className="red">{errorPassword}</div>
						</Form.Group>
					</Col>
				</Form.Row>

				<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button">
						Sign Up
					</Button>
				</div>
				</Form>
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
			
		</>
	);
}
export default Signup;
