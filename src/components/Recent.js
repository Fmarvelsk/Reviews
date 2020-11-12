import React from 'react';
import Pain from '../image/pain.jpg'

function Recent(){
    return(
        <>
        <div className="recent-view-data mt-3">
                <img src={Pain} className="recent-review-img" alt="avatar" />
                <div className="header-recent">
                    <p className="p-header">
                        Robert Fox
                    </p>
                    <p>Rating Star</p>
                </div>
                </div>
                <div className="pr-3 pl-3 pt-3 pb-2">
                    <p className="review-text">Even though I ordered from the from wrong location, they were still nice enough to remake it for me at the 20th location right next to me. Customer service is 5 stars! Sushi is good too!

                    </p>
                </div>
        </>
    )
}
export default Recent