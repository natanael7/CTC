import React from 'react';

function CauseCard(props) {
	return (
		<div className="col-md-4 ftco-animate">
			<div className="cause-entry">
				<a href="#" className="img" style={{ backgroundImage: `url(${props.background})` }} />
				<div className="text p-3 p-md-4">
					<h3>
						<a href="#">{props.title}</a>
					</h3>
					<p>{props.description}</p>
					<div className="progress custom-progress-success">
						<div
							className="progress-bar bg-primary"
							role="progressbar"
							style={{ width: `${props.progress}` }}
							aria-valuenow={props.progress}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
					<span className="fund-raised d-block">
						{props.raised} raised of {props.total}
					</span>
				</div>
			</div>
		</div>
	);
}

export default CauseCard;
