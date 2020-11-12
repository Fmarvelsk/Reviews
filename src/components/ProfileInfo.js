import React, { useState } from 'react';
import {Tab, Row, Col, ListGroup, Image} from 'react-bootstrap'
import Reviews from './Reviews';
function ProfileInfo(){
    const [sort, sortBy ] = useState();
    const handleChange = (e) => {
        sortBy({ value : e.target.value})
    }
    return (
         <div className="tab mt-5">
    <div className="profile-name test text-center">
   <div className="profile-name">
    <h3>Wade Warren</h3>
    <p>Boston, Massachusetts</p>
    </div>
    <div className="lo">
    <p> Rating </p>
    </div>
    </div>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row className="profile-margin margin-row">
    <Col sm={8} md={4} xl={4} className="col-color">
 <Image className="rounded-image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx3Zmwl93kSrhaxf7so-usNdWGpNc64aUanA&usqp=CAU" roundedCircle />
      <ListGroup className="review-grop">
        <ListGroup.Item className="change" action href="#link1">
          Profile Overview
        </ListGroup.Item>
        <ListGroup.Item className="change" action href="#link2">
          Reviews
        </ListGroup.Item>
        <ListGroup.Item className="change" action href="#link3">
          Link 3
        </ListGroup.Item>
        <ListGroup.Item className="change" action href="#">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item className="change" action href="#">
          Link 2
        </ListGroup.Item>
      
      </ListGroup>
    </Col>
    <Col sm={8} md={7} xl={7} className="col-8-color">
      <Tab.Content className="review-content">
        <Tab.Pane eventKey="#link1">
          <p>This is one</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
            <h3 className="my-color">Reviews</h3>
            <div className="sort">
                <label>Sort by Rating 
            <select value={sort} onChange={handleChange}>
    <option value="Date">Date</option>
    <option value="Rating">Rating</option>
    <option value="C">Cranberry</option>
  </select>
  </label>
  </div>
            <Reviews/>
          </Tab.Pane>
          <Tab.Pane eventKey="#link3">

          </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

</div> 
            
    )
}

export default ProfileInfo