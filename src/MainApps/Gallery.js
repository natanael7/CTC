import React from 'react';

import GalleryBox from '../components/App/GalleryComponents/GalleryBox.js'

import FirstSlide from '../components/Global/FirstSlide.js'
import BeAVolunteer from '../components/Global/BeAVolunteer'

let FirstSlideProps = {
    background: 'images/bg_2.jpg',
    span: 'Gallery',
    h1: 'Galleries'
}

function Gallery(){
    return(
        <div>
            <FirstSlide {...FirstSlideProps} />
            <GalleryBox />
            <BeAVolunteer />
        </div>
    )
}

export default Gallery;
