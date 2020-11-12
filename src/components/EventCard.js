import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Photo2 from '../image/photoEvent.jpg';
import EventPic2 from '../image/photoEvent3.jpg';
import EventPic3 from '../image/photoEvent1.jpg';
function EventCard (){
    return ( 
    <Row className="write-row pad-row-card">
        <Col md={6} xl={4} className="mb-3">
            <div class="adjust">
                <Card.Img variant="top" src={Photo2} />
                <Card.Body>
      <div class="progress-circle" data-value='80'>
          <span class="progress-circle-left">
                        <span class="progress-circle-bar border-primary"></span>
          </span>
          <span class="progress-circle-right">
                        <span class="progress-circle-bar border-primary"></span>
          </span>
          <div class="progress-circle-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div class="h2t font-weight-bold">80<sup class="small">%</sup></div>
          </div>
        </div>
        <div className="post-side">
       <Card.Title className="text-center v">Chez moi</Card.Title>
      <Card.Text>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.{' '}
      
      </Card.Text>
      </div>
      <div>
        <p><b>Opening Hours</b>: 9:00h - 23:00h</p>
        <p><b>Special Treat </b>: Cocktail with chicken wings</p>
      </div>
    </Card.Body>
    <Card.Footer>
      <div className="c">
        <img className="size-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx3Zmwl93kSrhaxf7so-usNdWGpNc64aUanA&usqp=CAU" alt='avatar' />
        <div className="diff">
          <p className="tell">Savannah Nguyen</p>
          <span>Stars</span>
         </div>
        <div className="diffs">12/02/2020</div>
      </div>
      <p>One of the best in town. This is a 5-star restaurant no doubt. Customer service one of the best, food is topnotch</p>
        
    </Card.Footer>
  </div>
        </Col>
        <Col md={6} xl={4} className="mb-3">
            <div class="adjust">
                <Card.Img variant="top" src={EventPic2} />
                <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </div>
       </Col>
       <Col md={6} xl={4} className="mb-3">
            <div class="adjust">
                <Card.Img variant="top" src={EventPic3} />
                <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </div>
       </Col>
        </Row>
    )
}

export default EventCard;