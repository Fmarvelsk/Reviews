import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react';
import { Form } from 'react-bootstrap';

function Signup(props) {
	const { email, setUser } = useState();
	const { password, setPassword } = useState();

	const Signin = (e) => {
		e.preventDefault();
	};
	return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
export default Signup;
