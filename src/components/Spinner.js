import React from 'react'
import Loader from '../image/806.gif'
const Spinner = () => {
    return(
        <div className="load-spinner">
            <img src={Loader} alt="loading"/>
        </div>
    )
}
export default Spinner