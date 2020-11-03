import React from 'react';
import {Image} from 'react-bootstrap';
import ImgHome from '../image/header-background.jpg'
function Header(){
    return(
<>
<div className="login-model-div login-form">
<Image src={ImgHome} fluid/>
</div>
</>

    )
}

export default Header