import React, { useState } from 'react';
import {Tab, Row, Col, ListGroup, Image} from 'react-bootstrap'
import Reviews from './Reviews';
function ProfileInfo(){
    const [sort, sortBy ] = useState();
    const handleChange = (e) => {
        sortBy({ value : e.target.value})
    }
    return (
        <div className="tab">
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
    <div className="profile-name">
    <h3>hello</h3>
    </div>
  <Row className="profile-margin margin-row">
    <Col sm={4} md={4} className="col-color">
    <Image className="rounded-image"src="https://cdn.onlinewebfonts.com/svg/img_568656.png" roundedCircle />
      <ListGroup className="review-group">
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8} md={8} className="col-8-color">
      <Tab.Content className="review-content">
        <Tab.Pane eventKey="#link1">
          <p>This is one</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
            <h3>Reviews</h3>
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
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            </div>
    )
}

export default ProfileInfo