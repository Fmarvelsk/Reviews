import React, { useEffect} from 'react';
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
				dispatch(UserLoggedIn({loggedIn, loggedUser, loggedLast}))
			}
			//eslint-disable-next-line
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


		return () => myabortController.abort()
	}, [dispatch]);
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
				<Route exact path="/business/:businessId">
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
