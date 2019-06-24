import React from 'react';

import CounterMain from '../Local/CounterMain'
import CounterDonate from '../Local/CounterDonate'
import CounterVolunteer from '../Local/CounterVolunteer'

function Counter(){
    return(
        <div>
           <section className="ftco-counter ftco-intro" id="section-counter">
                <div className="container" >
                <div className="row no-gutters">
                    <CounterMain />
                    <CounterDonate />
                    <CounterVolunteer />
                </div>
                </div>
            </section>
        </div>
    )
}

export default Counter;
