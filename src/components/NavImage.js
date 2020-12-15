import React from "react";
import { Breadcrumb } from 'react-bootstrap';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PhonelinkEraseIcon from '@material-ui/icons/PhonelinkErase';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import BuildIcon from '@material-ui/icons/Build';
function NavRes(){
    return(
        <Breadcrumb className="navRes">
        <Breadcrumb.Item href="#"><RestaurantMenuIcon className="rescolor"/> Restaurants</Breadcrumb.Item>
        <Breadcrumb.Item href="#"><DriveEtaIcon className="drivecar"/>
          Automobiles
        </Breadcrumb.Item>
        <Breadcrumb.Item><BuildIcon className="screw"/>Plumbing</Breadcrumb.Item>
        <Breadcrumb.Item><EventSeatIcon className="carp-color"/> Carpentry</Breadcrumb.Item>
      
        <Breadcrumb.Item><HomeWorkIcon className="home-col"/>Home services</Breadcrumb.Item>
        <Breadcrumb.Item><PhonelinkEraseIcon className="phone-col"/>Phone repair</Breadcrumb.Item>
        <Breadcrumb.Item><FitnessCenterIcon className="lift"/>Gyms</Breadcrumb.Item>
    
    
      </Breadcrumb>
    )
}

export default NavRes