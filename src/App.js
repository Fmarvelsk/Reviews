import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import './App.css';
import Landing from './components/Landing';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';

function App() {
	useEffect(() => {
		$('.carousel .carousel-item').each(function () {
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (var i = 0; i < 4; i++) {
				next = next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}

				next.children(':first-child').clone().appendTo($(this));
			}
		});
	});
	return (
		// <Router>
		// 	<Switch>
		// 		<Route exact path="/">
		// 			<Landing/>
		// 		</Route>
		// 		<Route path="/Events">
		// 			<Nav />
		// 			<EventHeader />
		// 		</Route>
		// 		<Route path="/profile">
		// 			<Navbar />
		// 			<Profile />
		// 		</Route>
		// 		<Route path="/writeReview">
		// 			<Navbar />
		// 			<WriteReview />
		// 		</Route>
		// 	</Switch>
		//   <Footer />
		// </Router>
		<Modal.Dialog>
			<Modal.Header closeButton>
				<Logo />
			</Modal.Header>

			<Modal.Body>
      {/* Switch here between login and sign up */}
				<Modal.Title id="login-modal-title">Join millions of people sharing their experience</Modal.Title>
				<LoginForm />
			</Modal.Body>

			<Modal.Footer style={{display: 'flex', justifyContent: 'center'}}>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Some BS over here" />
				</Form.Group>
			</Modal.Footer>
		</Modal.Dialog>
	);
}

export default App;
