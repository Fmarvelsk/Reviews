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
import Nav from './components/EventNav';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import BusinessPage from './components/BusinessPage';

function App() {
	useEffect(() => {
		$(function () {
			$('#recipeCarousel2 .carousel-item').each(function () {
				var value = $(this).attr('data-value');
				var left = $(this).find('.progress-circle-left .progress-circle-bar');
				var right = $(this).find('.progress-circle-right .progress-circle-bar');

				if (value > 0) {
					if (value <= 50) {
						right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)');
					} else {
						right.css('transform', 'rotate(180deg)');
						left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)');
					}
				}
			});
		});
	}, []);

	function percentageToDegrees(percentage) {
		return (percentage / 100) * 360;
	}

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
					<Footer />
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
					<BusinessPage />
				</Route>
			</Switch>
			<AuthPage />
		</Router>
	);
}

export default App;
