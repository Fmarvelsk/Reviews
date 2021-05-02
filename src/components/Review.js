import React from 'react';
import { Row, Image, Col } from 'react-bootstrap';
import Pain from '../image/pain.jpg';
import Star from '../image/star.svg';
import '../styles/review.css';


export default function Review(props) {

//    const [ full, setFull ] = useState(false)

	return (<>
		<div className="review">
			<Row className="mb-2">
				<Col className="ph-0 align-items-center">
					<Image className="img-mid" src={Pain} alt="" roundedCircle /><span className="review-user">Justin Hayes</span>
				</Col>
			</Row>
			<Row style={{ alignItems: 'center' }}>
				<Image className="img-small" src={Star}></Image>
				<Image className="img-small" src={Star}></Image>
				<Image className="img-small" src={Star}></Image>
				<Image className="img-small" src={Star}></Image>
				<Image className="img-small mr-3" src={Star}></Image>
				<span>13/10/20</span>
			</Row>
			<Row id="review-comment" className="trimText">
				I like surprises. And sushi. and SURPRISE, we got to MAKE sushi! I've wanted to try to make
				sushi for a long time, but it seems like you need to have a party to do it because I can only
				ever find the seaweed in massive amounts. If you can't tell from the first sentences, making the
				sushi was a lot of fun. Everything that I tried was really good--even the rice--I know, rice is
				easy to make, but they add something that makes you unable to stop eating it!....
			</Row>
            
		</div>
					<hr />
</>
	);
}
