import React, { useState } from 'react';
import Carousel from './CarouselBusiness';
import { Container, Row, Col, Dropdown, Alert } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/businessPage.css';
import Phone from '../image/call.svg'
import Loc from '../image/location.svg'
import Review from './Review'

export default function BusinessPage() {
	const [sorting, setSorting] = useState('Rating');
	const percentage = 87;
	return (
		<>
			<div style={{ marginTop: '3rem' }}>
				<Carousel />
			</div>
			<Container fluid>
				<h3>Grand Palais</h3>
				<Row>
					<Col>
						<Col xs={12} md={12} style={{ marginRight: '1rem' }}>
							<Row>
								<CircularProgressbar
									value={percentage}
									text={`${percentage}%`}
									styles={buildStyles({
										strokeLinecap: 'butt',
									})}
								/>
							</Row>
							<Row style={{ justifyContent: 'center' }}>
								<small>300+ reviews</small>
							</Row>
							<Row id="overall-score-row">Overall Score</Row>
						</Col>
						
						<Col>
							<Alert variant="dark">
								<div className="location">
									<span><img src={Loc} alt=""/></span><span> 1901 Thomridge Cir. Shiloh, Hawaii 81063</span>
								</div>
								<div className="phone-number">
									<span><img src={Phone} alt=""/></span><span> (480) 555-0103</span>
								</div>
							</Alert>
						</Col>
					</Col>
				</Row>
				<Row>
					<div id="reviews-rating">
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
					<hr />
				</Row>
				<Review/>
				<Review/>
			</Container>
		</>
	);
}
