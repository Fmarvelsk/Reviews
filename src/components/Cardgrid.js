import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function Cardgrid ({ title, text, time, Photo, Photo2, Photo3}){
    return (
            <div className="card-grid">
  <Card className="mb-3">
    <Card.Img variant="top" src={Photo}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text> {text}  </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{time}</small>
    </Card.Footer>
  </Card>
  <Card className="mb-3">
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
  </Card>
  <Card className="mb-3">
    <Card.Img variant="top" src={Photo3} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</div>

    )
}

export default Cardgrid;