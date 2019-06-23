import React from 'react';

import GalleryCards from '../components/App/CausesComponents/GalleryCards';

import FirstSlide from '../components/Global/FirstSlide.js'
import BeAVolunteer from '../components/Global/BeAVolunteer';

let FirstSlideProps = {
    background: 'images/bg_5.jpg',
    span: 'Causes',
    h1: 'Causes'
}

function Causes(){
    return(
        <div>
            <FirstSlide {...FirstSlideProps} />
            <GalleryCards />
            <BeAVolunteer />
        </div>
    )
}

export default Causes;
