import React from 'react';

import FirstSlide from '../components/App/GalleryComponents/FirstSlide.js'
import GalleryBox from '../components/App/GalleryComponents/GalleryBox.js'
import BeAVolunteer from '../components/App/IndexComponents/BeAVolunteer'

function Gallery(){
    return(
        <div>
            <FirstSlide />
            <GalleryBox />
            <BeAVolunteer />
        </div>
    )
}

export default Gallery;
