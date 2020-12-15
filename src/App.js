import React, { useEffect } from 'react';
import $ from 'jquery';
import 'react-bootstrap';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventHeader from './components/Events';
import Profile from './components/Profile';
import WriteReview from './components/WriteReviews';
import Nav from './components/EventNav'
import Navbar from './components/Navbar'
import AuthPage from './components/AuthPage'
import axios from 'axios'
import { useStateValue } from './StateProvider'
function App() {
	//eslint-disable-next-line
	const [{buisness, reviews}, dispatch] = useStateValue()
	useEffect(() => {
	const dbUrl = async() => {
			const response = await axios({
				method: "GET",
				url: "https://dev-bestops.herokuapp.com/v1/business"

			}).then( res => dispatch({
				type:'Update reviews',
				business : res.data
			})).catch( err => (err))
			
		}
		const dbReview = async () => {
			const recentReviews = await axios({
				method : 'GET',
				url : 'https://dev-bestops.herokuapp.com/v1/review/recent'
			}).then ( result => dispatch({
				type:'Update reviews',
				reviews : result.data
			})).catch( err => err)
		}
		dbUrl()
		dbReview()
		
		$(function() {

			$(".progress-circle").each(function() {
		  
			  var value = $(this).attr('data-value');
			  var left = $(this).find('.progress-circle-left .progress-circle-bar');
			  var right = $(this).find('.progress-circle-right .progress-circle-bar');
		  
			  if (value < 0) {
				if (value <= 50) {
				  right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
				} else {
				  right.css('transform', 'rotate(180deg)')
				  left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
				}
			  }
		  
			})
		  
			function percentageToDegrees(percentage) {
		  
			  return percentage / 100 * 360
		  
			}
		  
		  });
		  
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
	}, []);
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
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
			</Switch>
			<AuthPage/>
			
		</Router>
	);
}

export default App;
