import React from 'react'
import { Image } from 'react-bootstrap';

function Reviews(){
return(
    <div>
        <hr/>
        <Image className="review-pic mt-3 mb-3" src="https://www.w3schools.com/css/img_chania.jpg" alt="reviews"/>
        <div className="header-review">
        <h3>Chez Moi</h3>
        <p className="p-header"> 4140 Parker Rd, Allentown</p>
        <p className="p-header">New Mexico 31134</p>
        </div>
        <p>Rating 14/10/2020</p>
        <p>
Since I left you, mine eye is in my mind; And that which governs me to go about Doth part his function and is partly blind, Seems seeing, but effectually is out; For it no form delivers to the heart Of bird, of flower, or shape which it doth latch: Of his quick objects hath the mind no part, Nor his own vision holds what it doth catch; For if it see the rud'st or gentlest sight, The most sweet favour or deformed'st creature,</p>
        
    </div>
)
}

export default Reviews