import React from 'react';
import { Card } from 'react-bootstrap';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import moment from 'moment'
import Rating from './Rating'
import '../Card.css'
import { Link } from 'react-router-dom';


function Percentage(percentage){
  return percentage * 100/5
}
function Example(props) {

  return (
    <div>
      <div className="rev-cards">
        <div style={{ width: "30%", marginRight:10}}>{props.children}</div>
        <div className="review-h3">
        <Link to={`/Business/${props.id}`}>
       <h3 className="h5">{props.label}</h3> </Link>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

function Cardgrid (props){

  const { recent } = props
    return (
        
        <div className="card-rev">
           
       { <img className="grid-img" variant="top" src={recent.bus[0].image} alt='business-logo'/> }
            <Card.Body>

              { recent.bus.map( (res, i)=> (
                <div key={i}>
                  <Example label={res.name} id={res._id} description={res.details}>
                <CircularProgressbar value={Percentage(recent.average)} text={`${Percentage(recent.average).toFixed(0)}%`} />
                <div className="pos-side">
             <p className="tc">Overall score</p>
            <Card.Text>
            
            </Card.Text>
            </div>
              </Example>
            
   <div>
   <p><span className="text-bold">Opening Hours:</span> {res.time}</p>
   <p><span className="text-bold">Special Treat :</span> Cocktail with chicken wings</p>
 </div>
 </div>      
              ))}
        
</Card.Body>
<div className="footer-review">
  <div className="card-review">
  <div className="diff">
    <img className="size-img" src="data:image/png;base64,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" alt='avatar' />
          <div className="my-margin">
          <span className="diff"><span>{recent.user[0].firstname}</span> <span className="ml-3">{ recent.user[0].lastname }</span></span>
          <Rating rating={recent.rating}/>
      </div>
     </div>
    
    <div>{moment(recent.review[0].createdAt).format("YYYY/MM/DD")}</div>
    
  </div>
  
  <p>{recent.message.charAt(0).toUpperCase() + recent.review[0].message.slice(1)}</p>

</div>
        </div>
  
    )
}

export default Cardgrid;