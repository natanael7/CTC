import React from 'react';

import ContactSlide from '../components/App/ContactComponents/ContactSlide.js'

import FirstSlide from '../components/Global/FirstSlide.js'

let FirstSlideProps = {
    background: 'images/bg_2.jpg',
    span: 'Contact',
    h1: 'Contact Us'
}

function Contact(){
    return(
        <div>
            <FirstSlide {...FirstSlideProps} />
            <ContactSlide />
        </div>
    )
}

export default Contact;
