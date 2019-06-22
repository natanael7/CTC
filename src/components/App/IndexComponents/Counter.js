import React from 'react';

function Counter(){
    return(
        <div>
           <section className="ftco-counter ftco-intro" id="section-counter">
                <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 color-1 align-items-stretch">
                        <div className="text">
                        <span>Served Over</span>
                        <strong className="number" data-number={1432805}>0</strong>
                        <span>Children in 190 countries in the world</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 color-2 align-items-stretch">
                        <div className="text">
                        <h3 className="mb-4">Donate Money</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                        <p><a href="#" className="btn btn-white px-3 py-2 mt-2">Donate Now</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 color-3 align-items-stretch">
                        <div className="text">
                        <h3 className="mb-4">Be a Volunteer</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                        <p><a href="#" className="btn btn-white px-3 py-2 mt-2">Be A Volunteer</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Counter;
