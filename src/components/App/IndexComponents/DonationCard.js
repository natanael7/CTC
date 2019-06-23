import React from 'react';

function DonationCard(props) {
	return (
		<div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
			<div className="staff">
				<div className="d-flex mb-4">
					<div className="img" style={{ backgroundImage: `url(${props.photo})` }} />
					<div className="info ml-4">
						<h3>
							<a href="teacher-single.html">{props.name}</a>
						</h3>
						<span className="position">Donated {props.date}</span>
						<div className="text">
							<p>
								Donated <span>{props.ammount}</span> for <a href={props.causeLink}>{props.cause}</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DonationCard;
