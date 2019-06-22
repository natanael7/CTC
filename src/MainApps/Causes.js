import React from 'react';
import FirstSlide from '../components/App/CausesComponents/FirstSlide';
import GalleryCards from '../components/App/CausesComponents/GalleryCards';
import BeAVolunteer from '../components/App/IndexComponents/BeAVolunteer';

function Causes(){
    return(
        <div>
            <FirstSlide />
            <GalleryCards />
            <BeAVolunteer />
        </div>
    )
}

export default Causes;
