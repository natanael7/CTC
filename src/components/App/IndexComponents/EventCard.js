import React from 'react';

function EventCard(props) {
	return (
		<div className="col-md-4 d-flex ftco-animate">
			<div className="blog-entry align-self-stretch">
				<a
					href="blog-single.html"
					className="block-20"
					style={{ backgroundImage: `url(${props.background})` }}
				/>
				<div className="text p-4 d-block">
					<div className="meta mb-3">
						<div>
							<a href="#">{props.postedAt}</a>
						</div>
						<div>
							<a href="#">{props.postedBy}</a>
						</div>
						<div>
							<a href="#" className="meta-chat">
								<span className="icon-chat" /> {props.comments}
							</a>
						</div>
					</div>
					<h3 className="heading mb-4">
						<a href="#">{props.name}</a>
					</h3>
					<p className="time-loc">
						<span className="mr-2">
							<i className="icon-clock-o" /> {props.time}
						</span>{' '}
						<span>
							<i className="icon-map-o" /> {props.location}
						</span>
					</p>
					<p>{props.description}</p>
					<p>
						<a href={props.link}>
							Join Event <i className="ion-ios-arrow-forward" />
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default EventCard;
