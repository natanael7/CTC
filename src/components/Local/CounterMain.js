import React from 'react';

function CounterMain() {
	return (
		<div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
			<div className="block-18 color-1 align-items-stretch">
				<div className="text">
					<span>Served Over</span>
					<strong className="number" data-number={1432805}>
						0
					</strong>
					<span>Children in 190 countries in the world</span>
				</div>
			</div>
		</div>
	);
}

export default CounterMain;
