import React from 'react';

import CauseCard from './CauseCard'

let card = {
		background: "images/cause-1.jpg",
		title: "Clean water for the urban area",
		description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life",
		progress: "28%",
		raised: "$12,000",
		total: "$30,000", 
		link: "#"
	}

function GalleryCards() {
	return (
		<div>
			<section className="ftco-section">
				<div className="container">
					<div className="row">
						<CauseCard {...card}/>
						<CauseCard {...card}/>
						<CauseCard {...card}/>
						<CauseCard {...card}/>
						<CauseCard {...card}/>
						<CauseCard {...card}/>
					</div>
					<div className="row mt-5">
						<div className="col text-center">
							<div className="block-27">
								<ul>
									<li>
										<a href="#">&lt;</a>
									</li>
									<li className="active">
										<span>1</span>
									</li>
									<li>
										<a href="#">2</a>
									</li>
									<li>
										<a href="#">3</a>
									</li>
									<li>
										<a href="#">4</a>
									</li>
									<li>
										<a href="#">5</a>
									</li>
									<li>
										<a href="#">&gt;</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default GalleryCards;
