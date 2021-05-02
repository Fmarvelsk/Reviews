import React, { useEffect, useState } from 'react';
import Carousel from './CarouselBusiness';
import { Container, Row, Col, Dropdown, Alert, Button } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/businessPage.css';
import axios from 'axios';
import Phone from '../image/call.svg'
import { useStateValue } from '../StateProvider'
import Loc from '../image/location.svg'
import Review from './Review'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import Verify from '../image/Vector.png'

export default function BusinessPage() {
	const [{byId}, dispatch] = useStateValue()
	const [sorting, setSorting] = useState('Rating');
	const { businessId } = useParams()
	const [loading, setloading] = useState(false)
	const percentage = 80;

	useEffect(() => {
		//eslint-disable-next-line
		let mounted = true;
		document.body.style.background = '#E5E5E5'
		const dbUrl = async() => {
			//eslint-disable-next-line
				const response = await axios({
					method: "GET",
					headers: { _id : `${businessId}`},
					url: `https://dev-bestops.herokuapp.com/v1/business/id`
					
	
				})
				.then( res => {
					dispatch({
					type:'getById',
					business : res.data
				}) 
				setloading(true)
				}).catch( err => (err))
				
			}
			dbUrl()
		return () => {
		//eslint-disable-next-line
			let mounted = false
			document.body.style.background = ''
		}
//eslint-disable-next-line
	},[businessId])

	
	return (
		<>
		{ loading ? byId.data && byId.data.map((result, i) => 
			 <div key={i}>
			 <div style={{ marginTop: '3rem' }}>
				 <Carousel />
			 </div>
			 <Container fluid className="mt-3">
				 <div className="buss-name"><h3>{result.name}</h3> </div>
				 <Row className="robot">
						 <Col md={8}>
							 <Row>
								 
								 <Col md={3}>
																	 <CircularProgressbar
									 value={percentage}
									 text={`${percentage}%`}
									 styles={buildStyles({
										 strokeLinecap: 'butt',
									 })}
								 />
								 <Row style={{ justifyContent: 'center' }}>
								 <small>300+ reviews</small>
							 </Row>
							 <Row id="overall-score-row">Overall Score</Row>
								 </Col>
								 <Col md={9} lg={7} style={{ marginTop : '20px'}}>
									 <span className="dtsl">
									 {result.details}
									 </span>
									 <Row style={{ justifyContent : 'space-around', marginTop: '1rem'}}>
										 <Button className="addPhotos">Add Photos</Button>
										 <Link className="linkToWrite" to="">Write a Review</Link>
									 </Row>
								 </Col>
							 </Row>
							 
						 </Col>
						 
						 <Col md={4} style={{ marginTop : '20px'}}>
							 <Alert variant="dark">
								 <div className="location">
									 <span><img src={Loc} alt=""/></span><span> 1901 Thomridge Cir. Shiloh, Hawaii 81063</span>
								 </div>
								 <div className="phone-number">
									 <span><img src={Phone} alt=""/></span><span> (480) 555-0103</span>
								 </div>
							 </Alert>
											 </Col>
				 </Row>
				 
				 <Row className="mt-3 robot">
					 <Col md={8} className="contain" style={{background : '#fff', paddingLeft: '60px', paddingRight: '90px'}}>
				 <Row>
					 <div id="reviews-rating" className="">
						 <h3>Reviews</h3>
 
						 <Dropdown>
							 <Dropdown.Toggle variant="success" id="dropdown-basic">
								 Sort by: {sorting}
							 </Dropdown.Toggle>
							 <Dropdown.Menu>
								 <Dropdown.Item onClick={() => setSorting('Lowest Rating')}>
									 Lowest Rating
								 </Dropdown.Item>
								 <Dropdown.Item onClick={() => setSorting('Highest Rating')}>
									 Highest Rating
								 </Dropdown.Item>
								 <Dropdown.Item onClick={() => setSorting('Latest Rating')}>
									 Latest
								 </Dropdown.Item>
							 </Dropdown.Menu>
						 </Dropdown>
						 
					 </div>
					 
					 <hr style={{margin:'15px'}}/>
				 </Row>
					
			{ result.review.map((view, k) => 
				 <Review key={k} reviews={view}/>
				
			)}
				 </Col>
					 <Col md={4} >
						 <div className="verifyBuss">
							 <div className='vector'>
							 <img src={Verify} alt="verify business"/>
							 </div>
							 <div style={{padding: '20px'}}>
		  <span> Is this your Business?</span><p>
 Verify your business profile to update your business information, reply reviews, and control your business!</p>
 </div>
 <div className="vector">
		 <Button className="btn-col">Verify Business</Button> </div>
 </div>
 
					 </Col>
 
				 </Row>
			 </Container>
			 </div>
		) : <div>hello</div>}
		</>
	);
}
