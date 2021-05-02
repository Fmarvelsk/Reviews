import React from 'react';
import Header from './Header';
import Card from './Cardgrid';
import Carousel from './Carousel';
import { useStateValue } from '../StateProvider';
import Spinner from './Spinner';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';

export default function Landing() {
	//eslint-disable-next-line
	const [{reviews, loading}, dispatch] = useStateValue()
	//eslint-disable-next-line
	const { path, url } = useRouteMatch();
	//const [hideCard, showCard] = useState(true);
	return (
		<>
			<Header />
			<div className="body_page">
				<div className="card-bottom">
				
		{ loading ? (<Spinner/>) : (<>
			<div className="postion-center">
						<h3>Recent Reviews</h3>
						</div>
					
    					<Card recent={reviews}
						/>
				{/*	<div className="load-btn">
						<Button
							onClick={() => {
								showCard(!hideCard);
							}}
						>
							{hideCard ? 'Show Less' : 'Load More'}
						</Button>
					</div>/** */}
	
</>) }
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
