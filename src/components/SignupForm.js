import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Button, Col, Spinner } from 'react-bootstrap';
import googleLogo from '../image/google_logo.png';
import axios from 'axios'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router-dom';
import { setUser } from '../store/actions/authModal'
import {useDispatch} from 'react-redux'

function Signup() {
	const history = useHistory();
	const dispatch = useDispatch()
	const [firstname, setEmailname] = useState(),
		[isloading, loading] = useState(false),
		[type, showType] = useState('Password'),
		[hide, show] = useState(true),
		[lastname, setLastname] = useState(),
		[email, setEmail ]  = useState(),
		 [password, setPassword ] = useState(),
		 [errorPassword, setErrorPassword] = useState(""),
		 [userError, setEmailError] = useState("") 
		 
		 
		 const visiblity = (e) => {
			e.preventDefault()
			showType('Text')
			   show(false)
		}
		const hideVisbilty = (e) => {
			e.preventDefault()
			showType('Password')
			show(true)
		}

	
		const validatePassword = (e) => {
			const patt =new RegExp('^(?=.*[A-Za-z])(?=.*)[A-Za-z]{6,20}$')
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
		loading(true)
		const info = {
			firstname : firstname,
			lastname : lastname,
			email : email,
			password : password
		};
		
					const dbUrl = async() => {
						//eslint-disable-next-line
						const response = await axios({
							method: "post",
							headers: { 'Content-Type' : 'application/json'},
							data: info,
							url: "https://dev-bestops.herokuapp.com/v1/signup"
			
						}).then( response => {
							setTimeout( () => {
								setErrorPassword('')
								loading(false)
								dispatch(setUser(info))
								history.push('/profile')
								
							}, 2000)
							
							console.log(response.data)
						}).catch(err => 
							setTimeout( () => {
								loading(false)
							setEmailError("Email already exist")
								
							}, 2000)
							 
						)
					}
					dbUrl()
		
		
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
							<Form.Control type="text" placeholder="John" onChange={e => setEmailname(e.target.value)} required/>
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6}>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Doe" onChange={ e => setLastname(e.target.value)} required/>
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Row className="align-items-center">
					<Col xs={12}>
						<Form.Group controlId="formBasicEmail" id="form-group-signup-email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" onChange={ e=> setEmail(e.target.value)}/>
								
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Form.Group controlId="formBasicPassword" id="form-group-signup-password" className="recent-view-data">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type={type}
								placeholder="Password"
								maxLength="20"
								onChange = {validatePassword}
								
								/>			
						{
					(hide ? ( <VisibilityOffIcon className="visiblity" onClick={visiblity}/>) : (
						<VisibilityIcon className="visiblity" onClick={hideVisbilty}/>
					))
					}
								<div className="red">{errorPassword}</div>
						</Form.Group>
					</Col>
				</Form.Row>

				<div id="login-button-container">
					<Button variant="primary" type="submit" id="login-button">
					{isloading ? (<><Spinner animation="border" variant="primary" disabled={isloading}/>
						 <span className="sr-only">Loading...</span></>
						 ) :'Sign up' }  
			
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
