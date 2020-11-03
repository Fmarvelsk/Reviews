import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Photo2 from '../image/photoEvent.jpg';
import EventPic2 from '../image/photoEvent3.jpg';
import EventPic3 from '../image/photoEvent1.jpg';
function EventCard (){
    return ( 
    <Row className="write-row pad-row-card">
        <Col md={4} xs={12} className="mb-3">
            <div class="adjust">
                <Card.Img variant="top" src={Photo2} />
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
        <Col md={4} xs={12} className="mb-3">
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
       <Col md={4} xs={12} className="mb-3">
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
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </div>
       </Col>
        </Row>
    )
}

export default EventCard;