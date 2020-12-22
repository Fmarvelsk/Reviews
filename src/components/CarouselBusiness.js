import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../image/photo580.jpg';
import photo2 from '../image/photo5802.jpg';
import photo3 from '../image/photo5807.jpg';

export default function CarouselBusiness() {
	//eslint-disable-next-line
	const [index, setIndex] = useState(0);
 //eslint-disable-next-line
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel>
			<Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo1}
					alt="First slide"
				/>
				
			</Carousel.Item>
			<Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo2}
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo3}
					alt="Third slide"
				/>

			</Carousel.Item>
            <Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo1}
					alt="First slide"
				/>
				
			</Carousel.Item>
			<Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo2}
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo3}
					alt="Third slide"
				/>

			</Carousel.Item>
            <Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo1}
					alt="First slide"
				/>
				
			</Carousel.Item>
			<Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo2}
					alt="Third slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<img
                    style={{maxHeight: '90vh'}}
					className="d-block w-100"
					src={photo3}
					alt="Third slide"
				/>

			</Carousel.Item>
		</Carousel>
	);
}
