import React from 'react';

import EventCards from '../components/App/EventComponents/EventCards.js'

import FirstSlide from '../components/Global/FirstSlide.js'

let FirstSlideProps = {
    background: 'images/bg_3.jpg',
    span: 'Eveniment',
    h1: 'Evenimentez'
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
