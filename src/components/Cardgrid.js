import React from 'react';
import { Card } from 'react-bootstrap';
import Photo2 from '../image/photoEvent.jpg';
import moment from 'moment'
import Rating from './Rating'
import '../Card.css'
function Cardgrid (props){
    return (
      <div className="card-deck-rev">
         {props.recent?.data?.map( (card, index) =>(
         
        <div className="card-rev" key={index}>
        <Card.Img variant="top" src={card.bus[0].image} />
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
   <Card.Title className="text-center v">{card.bus[0].name}</Card.Title>
  <Card.Text>
    {card.bus[0].details}
  {console.log(card)}
  </Card.Text>
  </div>
  <div>
    <p><b>Opening Hours</b>: {card.bus[0].time}</p>
    <p><b>Special Treat </b>: Cocktail with chicken wings</p>
  </div>
</Card.Body>
<div className="footer-review">
  <div className="card-review">
  <div className="diff">
    <img className="size-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx3Zmwl93kSrhaxf7so-usNdWGpNc64aUanA&usqp=CAU" alt='avatar' />
          <div className="my-margin">
          <span className="diff"><p>{card.user[0].firstname}</p> <p className="ml-3">{ card.user[0].lastname }</p></span>
      <div> <div><Rating rating={card.rating}/></div>
   </div>
      </div>
     </div>
    
    <div className="diffs">{moment(card.review[0].createdAt).format("YYYY/MM/DD")}</div>
    
  </div>
  
  <p>{card.message.charAt(0).toUpperCase() + card.review[0].message.slice(1)}</p>

  {}
    
</div>
        </div>
  
         ))}
    </div>
    )
}

export default Cardgrid;