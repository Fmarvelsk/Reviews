import React from 'react';
import Recent from './Recent'
import Photo1 from '../image/photo580.jpg';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios'
function ReviewBusiness (){
    const SendReviews = async (e)=> {
        e.preventDefault()
        const sendUrl = await axios({
            method:"PUT",
            url: "https://dev-bestops.herokuapp.com/v1/review/add"
        })
        console.log(sendUrl.data)
    }
    return(
        <div>
            <Row className="write-row">
                <Col md={8} xs={12} className="border-man ">
                    <form onSubmit={SendReviews}>                    
                        <div className="padding-col mb-5">

                    <img className="review-img" src={Photo1} alt="business"/>
                    <h3 className="def">Grand Palais</h3> 
                       
                    <div className="space mt-5">
                        <div className="mt-3">
                        <h4>Rate your experience</h4>
                        <p>Rating</p>

                        <p className="tell v"><b>Tell your story</b></p><br/>
                        
                        <textarea placeholder="Tell us your story, Explain what happened and avoid using offensive words. Keep your feedback honest, helpful and constructive.">
                            
                        </textarea>
                        </div>
                    </div>
                    
                    <button className="post-btn mt-5">Post</button>
                    
                    </div>
                    </form>
                </Col>
                <Col md={4} xs={12} className="recent-review mt-5">
                   <p className="text-center mt-3 v">Recent views</p>
                   <Recent/>
                    <Recent/>
                    <Recent/>
                    <Recent/>
                </Col>
            </Row>
        </div>
    )
}
export default ReviewBusiness