import React from 'react';

function MainSlide() {
	return (
		<div>
			<div
				className="hero-wrap"
				style={{ backgroundImage: 'url("images/bg_7.jpg")' }}
			>
				<div className="overlay" />
				<div className="container">
					<div
						className="row no-gutters slider-text align-items-center justify-content-center"
						data-scrollax-parent="true"
					>
						<div
							className="col-md-7 ftco-animate text-center"
							data-scrollax=" properties: { translateY: '70%' }"
						>
							<h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
								Centrul Municipal de Tineret Chișinău
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainSlide;
