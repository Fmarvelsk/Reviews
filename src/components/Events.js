import React from 'react';
import { Image } from 'react-bootstrap';
import EventCard from './EventCard';
import EventPic from '../image/photoEvent1.jpg';
import EventPic2 from '../image/photoEvent3.jpg';
import EventPic3 from '../image/photoEvent.jpg';
function Events () {
    return (
        <div className="img-fluid">
            <div>
            <img src={EventPic2} alt="pic" className="pic-abs"/>
  
            </div>
            <div>
            <hr class="hr-event"/>
            <div class="p-header">
            <div class="upcoming"><h3>Upcoming Events</h3></div>
        <div className="create"><button>Create Event</button></div>
            </div>
            </div>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    )
}

export default Events;