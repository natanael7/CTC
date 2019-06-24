import React from 'react';

function CounterMain() {
	return (
		<div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
			<div className="block-18 color-1 align-items-stretch">
				<div className="text">
					<span>Peste</span>
					<strong className="number" data-number={50000}>
						0
					</strong>
					<span>Beneficiari în municipiul Chișinău și suburbiile acestuia</span>
				</div>
			</div>
		</div>
	);
}

export default CounterMain;
