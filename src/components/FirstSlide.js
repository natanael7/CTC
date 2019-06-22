import React from 'react';

function FirstSlide(){
    return(
        <div>
            <div className="hero-wrap" style={{backgroundImage: 'url("images/bg_7.jpg")'}} data-stellar-background-ratio="0.5">
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                    <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Doing Nothing is Not An Option of Our Life</h1>
                    <p className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Created by <a href="#">Colorlib.com</a></p>
                    <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="https://vimeo.com/45830194" className="btn btn-white btn-outline-white px-4 py-3 popup-vimeo"><span className="icon-play mr-2" />Watch Video</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSlide;
