import React from 'react';

import HelpCard from './HelpCard';

let firstCard = {
    icon: 'flaticon-donation-1',
    title: 'Make Donation',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
}

let secondCard = {
    icon: 'flaticon-charity',
    title: 'Become A Volunteer',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
}

let thirdCard = {
    icon: 'flaticon-donation',
    title: 'Sponsorship',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
}


function Help(){
    return(
        <div>
            <section className="ftco-section">
                <div className="container">
                <div className="row">
                    <HelpCard {...firstCard}/>
                    <HelpCard {...secondCard}/>
                    <HelpCard {...thirdCard}/>                    
                </div>
                </div>
            </section>
        </div>
    )
}

export default Help;
