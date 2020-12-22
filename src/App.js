import React, { useEffect} from 'react';
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
//import Spinner from './components/Spinner'
import NotFound from './components/404'
import axios from 'axios'
import Unauthorized from './components/Unathorized'
import { useStateValue } from './StateProvider'
import BusinessPage from './components/BusinessPage'
import Footer from './components/Footer'

function App() {
	//eslint-disable-next-line
	const [{loading, reviews}, dispatch] = useStateValue()
	//const [loading, setLoading ] = useState()
	useEffect(() => {
	const dbUrl = async() => {
		//eslint-disable-next-line
			const response = await axios({
				method: "GET",
				url: "https://dev-bestops.herokuapp.com/v1/business"

			}).then( response => response.json())
			.then( res => dispatch({
				type:'Update reviews',
				business : res.data
			})).catch( err => (err))
			
		}
		const dbReview = async () => {
			//eslint-disable-next-line
			const recentReviews = await axios({
				method : 'GET',
				url : 'https://dev-bestops.herokuapp.com/v1/review/recent'
			}).then ( result => {
				dispatch({
				type:'Update reviews',
				reviews : result.data,
				
			})
			
		}).catch( err => err)
		}
		dbUrl()
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
	}, []);
	return (
		<>
			<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
					<Footer/>
				</Route>
				<Route exact path="/Events">
					<Nav />
					<EventHeader />
				</Route>
				<Route exact path="/profile">
					<Navbar />
					<Profile />
				</Route>
				<Route exact path="/writeReview">
					<Navbar />
					<WriteReview />
				</Route>
				<Route exact path="/business">
					<Navbar />
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
