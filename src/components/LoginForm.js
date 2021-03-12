import React, { useState } from 'react';
import { Form, Button, Modal, Spinner } from 'react-bootstrap';
import googleLogo from '../image/google_logo.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import '../styles/login.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { setUser, hideModal } from '../store/actions/authModal' 
import { useDispatch } from 'react-redux';


export default function LoginForm() {
	const dispatch = useDispatch()
	const [isloading, loading] = useState(false)
	const history = useHistory()
	const [type, showType] = useState('Password')
	const [hide, show] = useState(true)
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [error, setError] = useState()

	
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

	const Signin = (e) => {
		const info = {
			email: email,
			password: password
		}
		e.preventDefault()
		loading(true)
		const dbUser = async() => {
			//eslint-disable-next-line
				const response = await axios({
					method: "post",
					headers: { 'Content-Type' : 'application/json'},
					data: info,
					url: "https://dev-bestops.herokuapp.com/v1/login"
	}).then(token => {	
		dispatch(setUser(token.data.data))
		sessionStorage.setItem('firstname', JSON.stringify(token.data.data.user.firstname))
		sessionStorage.setItem('lastname', JSON.stringify(token.data.data.user.lastname))
		sessionStorage.setItem('token', JSON.stringify(token.data.data.token))
		setTimeout(() => {
			dispatch(hideModal())
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

				<Form.Group controlId="formBasicPassword" id="form-group-login-password" className="recent-view-data">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type={type}
						placeholder="Password"
						onChange = { e => setPassword(e.target.value)}
					required/>
						{
					(hide ? ( <VisibilityOffIcon className="visiblity" onClick={visiblity}/>) : (
						<VisibilityIcon className="visiblity" onClick={hideVisbilty}/>
					))
					}
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
