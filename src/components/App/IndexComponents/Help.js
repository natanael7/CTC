import React from 'react';

import HelpCard from './HelpCard';

let firstCard = {
    icon: 'flaticon-donation-1',
    title: 'Fă o Donație',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
}

let secondCard = {
    icon: 'flaticon-charity',
    title: 'Devino Voluntar',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
}

let thirdCard = {
    icon: 'flaticon-donation',
    title: 'Participă ca Partener',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
}


function Help(){
    return(
        <div>
            <section className="ftco-section help">
                <div className="container ">
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
