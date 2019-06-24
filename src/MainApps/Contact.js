import React from 'react';

import ContactSlide from '../components/App/ContactComponents/ContactSlide.js'

import FirstSlide from '../components/Global/FirstSlide.js'

let FirstSlideProps = {
    background: 'images/bg_4.jpg',
    span: 'Contacte',
    h1: 'Contactează-ne'
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
