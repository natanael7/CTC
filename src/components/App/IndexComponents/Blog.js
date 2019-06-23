import React from 'react';

import Card from './BlogCard.js'
import BlogTitle from './BlogTitle'

let blogData = {
    title: "Recent from blog",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
}

let firstCard = {
    background: "images/image_1.jpg",
    date: "Sept 10, 2018",
    postedBy: "Admin",
    comments: "3",
    title: "Hurricane Irma has devastated Florida",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
}
let secondCard = {
    background: "images/image_2.jpg",
    date: "Sept 10, 2018",
    postedBy: "Admin",
    comments: "3",
    title: "Hurricane Irma has devastated Florida",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
}
let thirdCard = {
    background: "images/image_3.jpg",
    date: "Sept 10, 2018",
    postedBy: "Admin",
    comments: "3",
    title: "Hurricane Irma has devastated Florida",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
}

function Blog(){
    return(
        <div>
            <section className="ftco-section">
                <div className="container">
                    <BlogTitle {...blogData}/>
                    <div className="row d-flex">
                        <Card {...firstCard}/>
                        <Card {...secondCard}/>
                        <Card {...thirdCard}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Blog