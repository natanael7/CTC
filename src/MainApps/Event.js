import React from 'react';

import FirstSlide from '../components/App/EventComponents/FirstSlide.js'
import EventCards from '../components/App/EventComponents/EventCards.js'

function Event(){
    return(
        <div>
            <FirstSlide />
            <EventCards />
        </div>
    )
}

export default Event;
