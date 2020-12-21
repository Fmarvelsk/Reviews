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
 <Image className="rounded-image"src="data:image/png;base64,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" roundedCircle />
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