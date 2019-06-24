import React from 'react';

import Welcome from '../components/App/AboutComponents/Welcome.js'
import Donations from '../components/App/IndexComponents/Donations'

import FirstSlide from '../components/Global/FirstSlide.js'
import Counter from '../components/Global/Counter'


let FirstSlideProps = {
    background: 'images/bg_1.jpg',
    span: 'Despre',
    h1: 'Despre Noi'
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
