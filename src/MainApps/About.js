import React from 'react';

import Welcome from '../components/App/AboutComponents/Welcome.js'
import Donations from '../components/App/IndexComponents/Donations'

import FirstSlide from '../components/Global/FirstSlide.js'
import Counter from '../components/Global/Counter'


let FirstSlideProps = {
    background: 'images/bg_7.jpg',
    span: 'About',
    h1: 'About Us'
}

function About(){
    return(
        <div>
            <FirstSlide {...FirstSlideProps} />
            <Welcome />
            <Counter />
            <Donations />
        </div>
    )
}

export default About;
