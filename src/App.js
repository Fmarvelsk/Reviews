import React, { useEffect} from 'react';
import $ from 'jquery';
import 'react-bootstrap';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import WriteReview from './components/WriteReviews';
import Navbar from './components/Navbar'
import AuthPage from './components/AuthPage'
import NotFound from './components/404'
import axios from 'axios'
import Unauthorized from './components/Unathorized'
import { useStateValue } from './StateProvider'
import BusinessPage from './components/BusinessPage'
import Footer from './components/Footer'
import { useSelector } from 'react-redux';
import { UserLoggedIn } from './store/actions/authModal'

function App() {
	//eslint-disable-next-line
	const [{loading, reviews}, dispatch] = useStateValue()
	
	useEffect(() => {
		const myabortController = new AbortController()
		
		const dbReview = async () => {
			//eslint-disable-next-line
			const loggedIn = sessionStorage.getItem('token')
			const loggedUser = sessionStorage.getItem('firstname')
			const loggedLast = sessionStorage.getItem('lastname')
			if(loggedIn) {
				console.log(loggedIn)
				dispatch(UserLoggedIn(loggedIn))
			}
			const recentReviews = await axios({
				method : 'GET',
				url : 'https://dev-bestops.herokuapp.com/v1/review/recent'
			}).then (result => {

				if (!result){
					return Promise.reject('error')
				}
					else {
				dispatch({
				type:'Update reviews',
				reviews : result.data
			})}
		})
		.catch( err => err)
		}

		dbReview()

		
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
		//eslint-disable-next-line
		return () => myabortController.abort()
	}, []);
	return (
		<>
			<Router>
				<Navbar/>
			<Switch>
				<Route exact path="/">
					<Landing />
					<Footer/>
				</Route>  
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/writeReview">
					<WriteReview />
				</Route>
				<Route exact path="/business">
					<BusinessPage/>
				</Route>
				<Route exact path="/unathorized">
				<Unauthorized/>
				</Route>
				<Route path="*">
					<NotFound/>
					<Footer/>
				</Route>
			</Switch>
			<AuthPage/>
			
		</Router>
					</>
	);
}

export default App;
