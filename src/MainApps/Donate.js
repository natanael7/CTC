import React from 'react';

import DonationCards from '../components/App/DonateComponents/DonationCards.js'

import FirstSlide from '../components/Global/FirstSlide.js'
import BeAVolunteer from '../components/Global/BeAVolunteer';

let FirstSlideProps = {
    background: 'images/bg_7.jpg',
    span: 'Donează',
    h1: 'Donații'
}

function Donate(){
    return(
        <div>
            <FirstSlide {...FirstSlideProps} />
            <DonationCards />
            <BeAVolunteer />
        </div>
    )
}

export default Donate;
