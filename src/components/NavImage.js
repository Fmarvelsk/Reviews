import React from "react";
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function NavRes(){
    return(
        <Breadcrumb className="navRes">
        <Breadcrumb.Item href="#">Restaurants</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Automobiles
        </Breadcrumb.Item>
        <Breadcrumb.Item>Plumbing</Breadcrumb.Item>
        <Breadcrumb.Item>Carpentry</Breadcrumb.Item>
        <Breadcrumb.Item>Home services</Breadcrumb.Item>
        <Breadcrumb.Item>Phone repair</Breadcrumb.Item>
        <Breadcrumb.Item>Gyms</Breadcrumb.Item>
        
    
    
    
      </Breadcrumb>
    )
}

export default NavRes