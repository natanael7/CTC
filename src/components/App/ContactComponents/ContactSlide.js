import React from 'react';

function ContactSlide() {
	return (
		<div>
			<section className="ftco-section contact-section ftco-degree-bg">
				<div className="container">
					<div className="row d-flex mb-5 contact-info">
						<div className="col-md-12 mb-4">
							<h2 className="h4">Contact Information</h2>
						</div>
						<div className="w-100" />
						<div className="col-md-3">
							<p>
								<span>Adresă:</span> str. Petru Zadnipru 3/2, <br />mun. Chișinău, Ciocana
							</p>
						</div>
						<div className="col-md-3">
							<p>
								<span>Telefon:</span> <a href="tel://1234567920">+373 22 486 790</a>
							</p>
						</div>
						<div className="col-md-3">
							<p>
								<span>Email:</span> <a href="mailto:info@yoursite.com">email@gmail.com</a>
							</p>
						</div>
						<div className="col-md-3">
							<p>
								<span>Website</span> <a href="#">yoursite.com</a>
							</p>
						</div>
					</div>
					<div className="row block-9">
						<div className="col-md-6 pr-md-5">
							<h4 className="mb-4">Ai careva întrebări?</h4>
							<form action="#">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Nume" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Email" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Subiect" />
								</div>
								<div className="form-group">
									<textarea
										name
										id
										cols={30}
										rows={7}  
										className="form-control"
										placeholder="Mesaj"
										defaultValue={''}
									  />
								</div>
								<div className="form-group">
									<input
										type="submit"
										defaultValue="Send Message"
										className="btn btn-primary py-3 px-5"
									/>
								</div>
							</form>
						</div>
						<div className="col-md-6" id="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32183.64761259291!2d28.833309601703466!3d47.03357980727307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41ac96d0bf55521!2sCentrul+Municipal+de+Tineret+Chi%C8%99in%C4%83u!5e0!3m2!1sen!2sit!4v1561325524045!5m2!1sen!2sit"
								width={600}
								height={450}
								frameBorder={0}
								style={{ border: 0 }}
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ContactSlide;
