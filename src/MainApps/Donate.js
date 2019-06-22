import React from 'react';

import FirstSlide from '../components/App/DonateComponents/FirstSlide.js'
import DonationCards from '../components/App/DonateComponents/DonationCards.js'
import BeAVolunteer from '../components/App/IndexComponents/BeAVolunteer';

function Donate(){
    return(
        <div>
            <FirstSlide />
            <DonationCards />
            <BeAVolunteer />
        </div>
    )
}

export default Donate;
