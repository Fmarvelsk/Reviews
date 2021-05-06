import React from 'react';
import Header from './Header';
import Card from './Cardgrid';
import Carousel from './Carousel';
import { useStateValue } from '../StateProvider';
//import Spinner from './Spinner';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import Skeleton from 'react-loading-skeleton'

export default function Landing() {
	//eslint-disable-next-line
	const [{reviews, loading}, dispatch] = useStateValue()
	//eslint-disable-next-line
	const { path, url } = useRouteMatch();
	const array = new Array(3)
	//const [hideCard, showCard] = useState(true);
	console.log(array)
	return (
		<>
			<Header />
			<div className="body_page">
				<div className="card-bottom">
				<div className="postion-center">
						<h3>Recent Reviews</h3>
						</div>
					
						<div className="card-deck-rev">
							{ loading ? (<><Skeleton className="card-rev" height={350} width={321}/>
							<Skeleton className="card-rev" height={350} width={321}/>
							<Skeleton className="card-rev" height={350} width={300}/> </>
							) : 
						reviews?.data?.map( (recent, i ) => (
							<Card 
							recent={recent}
							key={i}
							/>
						))
						}
						</div>
	
				
		{ /*!loading ? ( 
		<div className="card-deck-rev">
			<div className="card-rev">
		<Skeleton height={294}/>
		
		</div>
		<div className="card-rev">
		<Skeleton/>
		</div>
		<div className="card-rev">
		<Skeleton/>
		</div>
		
		)
			
		</div>
		
		) : (<>
			<div className="postion-center">
						<h3>Recent Reviews</h3>
						</div>
					
    					<Card recent={reviews}
						/>
	
</>)*/ }
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
