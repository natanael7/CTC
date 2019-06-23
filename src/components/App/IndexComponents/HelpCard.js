import React from 'react';

function HelpCard(props) {
	return (
		<div className="col-md-4 d-flex align-self-stretch ftco-animate">
			<div className="media block-6 d-flex services p-3 py-4 d-block">
				<div className="icon d-flex mb-3">
					<span className={props.icon} />
				</div>
				<div className="media-body pl-4">
					<h3 className="heading">{props.title}</h3>
					<p>
						{props.description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default HelpCard;
