import React from 'react';
import {Image, Form, FormControl,} from 'react-bootstrap';
import ImgHome from '../image/photoEvent4.jpg';

function Header(){
    return(
<>
<div className="background-image">
<Image src={ImgHome} fluid/>
<div className="imagecaption">
<h3>Everyone has a unique story to tell</h3>
<p className="story">What is your story</p>
<div className="searchpos">
<Form >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      
    </Form>
   </div>

</div>
</div>
</>

    )
}

export default Header