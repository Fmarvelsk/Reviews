import React, { useState } from 'react';
import { Form, FormControl, Jumbotron, Container } from 'react-bootstrap';
import NavRes from './NavImage';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/header.css';
function Header() {
	//eslint-disable-next-line
	const [search, setSearch] = useState()
	const SearchInfo = (e) => {
		e.preventDefault()
		setSearch(e.target.value)
	}
	return (
		<>
			<Jumbotron className="background-image mt-5" fluid>
				<Container>
					<div className="imagecaption">
						<h3>Everyone has a unique story to tell</h3>
						<p className="story">What is your story</p>
						<div className="searchpos">
							<Form >
								<FormControl type="text"placeholder="Search" onChange={SearchInfo} className="mr-sm-2" />
								 <button type="submit" className="dl"><SearchIcon/></button>						
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
