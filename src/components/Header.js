import React from 'react';
import { Image, Form, FormControl, Jumbotron, Container } from 'react-bootstrap';
import ImgHome from '../image/photoEvent4.jpg';
import NavRes from './NavImage';
import '../styles/header.css';
function Header() {
	return (
		<>
			<Jumbotron className="background-image" fluid>
				{/* <Image src={ImgHome} fluid /> */}
				<Container>
					<div className="imagecaption">
						<h3>Everyone has a unique story to tell</h3>
						<p className="story">What is your story</p>
						<div className="searchpos">
							<Form>
								<FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<button type="submit" className="dl">
									<i class="fa fa-search"></i>
								</button>
							</Form>
							<NavRes />
						</div>
					</div>
				</Container>
			</Jumbotron>
		</>
	);
}

export default Header;
