import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import './App.css';
import Landing from './components/Landing';
import Logo from './components/Logo';
import Login from './components/Login';
import SignUp from './components/Signup';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import Footer from './components/Footer';
import EventHeader from './components/Events';
import Profile from './components/Profile';
import WriteReview from './components/WriteReviews';
import Nav from './components/EventNav'
import Navbar from './components/Navbar'
import AuthPage from './components/AuthPage'
import BusinessPage from './components/BusinessPage'

function App() {
	useEffect(() => {
		$('#recipeCarousel2 .carousel-item').each(function () {
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
	}, []);
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
					<Footer/>
				</Route>
				<Route path="/Events">
					<Nav />
					<EventHeader />
				</Route>
				<Route path="/profile">
					<Navbar />
					<Profile />
				</Route>
				<Route path="/writeReview">
					<Navbar />
					<WriteReview />
				</Route>
				<Route path="/business">
					<Navbar />
					<BusinessPage/>
				</Route>
			</Switch>
			<AuthPage/>
		</Router>
	);
}

export default App;
