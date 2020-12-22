import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
    return(
        <div className="container text-center jumbotron mt-5 mb-5 pb-5">
            <h2>Page NotFound</h2>
            <Link to="/" className="dark-color">Go Back to Home</Link>
        </div>
    )
}
export default NotFound