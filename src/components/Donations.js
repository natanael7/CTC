import React from 'react';

function Donations(){
    return(
        <div>
            <section className="ftco-section">
                <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                    <h2 className="mb-4">Latest Donations</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                    <div className="staff">
                        <div className="d-flex mb-4">
                        <div className="img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                        <div className="info ml-4">
                            <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                            <span className="position">Donated Just now</span>
                            <div className="text">
                            <p>Donated <span>$300</span> for <a href="#">Children Needs Food</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                    <div className="staff">
                        <div className="d-flex mb-4">
                        <div className="img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                        <div className="info ml-4">
                            <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                            <span className="position">Donated Just now</span>
                            <div className="text">
                            <p>Donated <span>$150</span> for <a href="#">Children Needs Food</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                    <div className="staff">
                        <div className="d-flex mb-4">
                        <div className="img" style={{backgroundImage: 'url(images/person_3.jpg)'}} />
                        <div className="info ml-4">
                            <h3><a href="teacher-single.html">Ivan Jacobson</a></h3>
                            <span className="position">Donated Just now</span>
                            <div className="text">
                            <p>Donated <span>$250</span> for <a href="#">Children Needs Food</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Donations;
