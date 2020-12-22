import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Cardgrid';
import Carousel from './Carousel';
import { useStateValue } from '../StateProvider';
import { Button} from 'react-bootstrap';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';

export default function Landing() {
	//eslint-disable-next-line
	const [{reviews}, dispatch] = useStateValue()
	//eslint-disable-next-line
	const { path, url } = useRouteMatch();
	const [hideCard, showCard] = useState(true);
	return (
		<>
			<Navbar />
			<Header />
			<div className="body_page">
				<div className="card-bottom">
					<div className="postion-center">
						<h3>Recent Reviews</h3>
						</div>
					
    					<Card recent={reviews}
						/>
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
			<Switch>
				<Route path={`${path}/:login`} component={Login} />
				<Route path={`${path}/signup`} component={SignUp} />
			</Switch>
		</>
	);
}
