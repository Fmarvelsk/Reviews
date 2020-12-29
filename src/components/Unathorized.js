import React from 'react';
import { Link } from 'react-router-dom';
//import '../unAuthorized.scss';

const Unauthorized = () => {
  return (
    <div className='e container'>
      <div className="e gandalf">
        <div className="e fireball"></div>
        <div className="e skirt"></div>
        <div className="e sleeves"></div>
        <div className="e shoulders">
          <div className="e hand left"></div>
          <div className="e hand right"></div>
        </div>
        <div className="e head">
          <div className="e hair"></div>
          <div className="e beard"></div>
        </div>
      </div>
      <div className="e message">
        <h1>403 - You Shall Not Pass</h1>
        <p>Uh oh, Gandalf is blocking the way!<br />Maybe you have a typo in the url? Or you meant to go to a different location? Like...Hobbiton?</p>
      </div>
      <h2 className="text-center pb-5"><Link to='/' className="dark-color">Back to Home</Link></h2>
    </div>
  )
}

export default Unauthorized;