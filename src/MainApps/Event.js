import React from 'react';

import EventCards from '../components/App/EventComponents/EventCards.js'

import FirstSlide from '../components/Global/FirstSlide.js'

let FirstSlideProps = {
    background: 'images/bg_1.jpg',
    span: 'Event',
    h1: 'Events'
}

function Event(){
    return(
        <div>
            <FirstSlide {...FirstSlideProps} />
            <EventCards />
        </div>
    )
}

export default Event;
