import React from 'react';

import EventCard from './EventCard'

let firstCard = {
    background: "images/event-1.jpg",
    postedAt: "Sep. 10, 2018",
    postedBy: "Admin",
    comments: "3",
    name: "World Wide Donation",
    time: "10:30AM-03:30PM",
    location: "Venue Main Campus",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "#"
}

let secondCard = {
    background: "images/event-2.jpg",
    postedAt: "Sep. 10, 2018",
    postedBy: "Admin",
    comments: "3",
    name: "World Wide Donation",
    time: "10:30AM-03:30PM",
    location: "Venue Main Campus",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "#"
}

let thirdCard = {
    background: "images/event-3.jpg",
    postedAt: "Sep. 10, 2018",
    postedBy: "Admin",
    comments: "3",
    name: "World Wide Donation",
    time: "10:30AM-03:30PM",
    location: "Venue Main Campus",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "#"
}

function Events(){
    return(
        <div>
            <section className="ftco-section bg-light">
                <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                    <h2 className="mb-4">Our Latest Events</h2>
                    </div>
                </div>
                <div className="row">
                    <EventCard {...firstCard} />
                    <EventCard {...secondCard} />
                    <EventCard {...thirdCard} />
                    
                </div>
                </div>
            </section>
        </div>
    )
}

export default Events;
