import React from 'react';
import { Col, Card } from 'react-bootstrap';
import moment from 'moment'
import Rating from './Rating'
function EventCard (props){
    return ( 
       <>
       {console.log(props?.recent?.data)}
        {props.recent?.data?.map( (card, index) =>(
        <Col md={6} xl={4} className="mb-3" key={index}>
        <div className="adjust">
            <Card.Img variant="top" src={card.bus[0].image} />
            {console.log()}
            <Card.Body>
  <div className="progress-circle" data-value='80'>
      <span className="progress-circle-left">
                    <span className="progress-circle-bar border-primary"></span>
      </span>
      <span className="progress-circle-right">
                    <span className="progress-circle-bar border-primary"></span>
      </span>
      <div className="progress-circle-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
        <div className="h2t font-weight-bold">80<sup className="small">%</sup></div>
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
  <div className="card-review">
  <div className="diff">
    <img className="size-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx3Zmwl93kSrhaxf7so-usNdWGpNc64aUanA&usqp=CAU" alt='avatar' />
          <div className="my-margin">
      <span className="diff"><p>{card.user[0].firstname}</p> <p className="ml-3">{ card.user[0].lastname }</p></span>
      {console.log(card.user[0])}
      <div><Rating rating={card.rating}/></div>
      </div>
     </div>
    
    <div className="diffs">{moment(card.review[0].createdAt).format("YYYY/MM/DD")}</div>
    {console.log(card.createdAt)}
  </div>
  
  <p>{card.review[0].message.charAt(0).toUpperCase() + card.review[0].message.slice(1)}</p>

  {}
    
</Card.Footer>
</div>
    </Col>
    ) )}
     
       </>

    )
}

export default EventCard;