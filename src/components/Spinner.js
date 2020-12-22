import React from 'react'
import Loader from '../image/806.gif'
const Spinner = () => {
    return(
        <div className="load-spinner">
            <h3>Loading Review...</h3>
            <img src={Loader} alt="loading"/>

        </div>
    )
}
export default Spinner