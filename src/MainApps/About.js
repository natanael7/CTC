import React from 'react';
import FirstSlide from '../components/App/AboutComponents/FirstSlide.js'
import Welcome from '../components/App/AboutComponents/Welcome.js'
import Counter from '../components/App/IndexComponents/Counter'
import Donations from '../components/App/IndexComponents/Donations'

function About(){
    return(
        <div>
            <FirstSlide />
            <Welcome />
            <Counter />
            <Donations />
        </div>
    )
}

export default About;
