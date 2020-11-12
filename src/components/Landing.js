import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Cardgrid';
import Carousel from './Carousel';
import Footer from './Footer';
// import EventHeader from './Events';
// import Profile from './Profile';
import { Button } from 'react-bootstrap';
import Photo1 from '../image/photo580.jpg';
import Photo2 from '../image/photo5802.jpg';
import Photo3 from '../image/photo5807.jpg';
import Photo4 from '../image/photo5801.jpg';
import Photo5 from '../image/photo5808.jpg';
import Photo6 from '../image/photo58073.jpg';
import Nav from './EventNav';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';

export default function Landing() {
	const { path, url } = useRouteMatch();
	console.log(path);

	const [hideCard, showCard] = useState(true);
	return (
		<>
			<Navbar />
			<Header />
			<div className="body_page">
				<div className="card-bottom">
					<div className="postion-center">
						<h3>Recent Reviews</h3>
						<div className="sort-btn"> Sort</div>
					</div>
					<Card
						title="Card title"
						text="This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer."
						time="Last updated 3 mins ago"
						Photo={Photo1}
						Photo2={Photo2}
						Photo3={Photo3}
					/>
					<Card
						title="Card title"
						text="This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer."
						time="Last updated 3 mins ago"
						Photo={Photo4}
						Photo2={Photo5}
						Photo3={Photo6}
					/>
					{hideCard ? (
						<Card
							title="Card title"
							text="This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer."
							time="Last updated 3 mins ago"
						/>
					) : null}
					<div className="load-btn">
						<Button
							onClick={() => {
								showCard(!hideCard);
							}}
						>
							{hideCard ? 'Show Less' : 'Load More'}
						</Button>
					</div>
				</div>
				<Carousel />
			</div>
			<Footer/>
			<Switch>
				<Route path={`${path}/:login`} component={Login} />
				<Route path={`${path}/signup`} component={SignUp} />
			</Switch>
		</>
	);
}
