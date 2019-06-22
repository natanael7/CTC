import React from 'react';

function BeAVolunteer(){
    return(
        <div>
            <section className="ftco-section-3 img" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                <div className="row d-md-flex">
                    <div className="col-md-6 d-flex ftco-animate">
                    <div className="img img-2 align-self-stretch" style={{backgroundImage: 'url(images/bg_4.jpg)'}} />
                    </div>
                    <div className="col-md-6 volunteer pl-md-5 ftco-animate">
                    <h3 className="mb-3">Be a volunteer</h3>
                    <form action="#" className="volunter-form">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                        <textarea name id cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
                        </div>
                        <div className="form-group">
                        <input type="submit" defaultValue="Send Message" className="btn btn-white py-3 px-5" />
                        </div>
                    </form>
                    </div>    			
                </div>
                </div>
            </section>
        </div>
    )
}

export default BeAVolunteer;
