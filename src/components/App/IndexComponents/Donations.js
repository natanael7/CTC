import React from 'react';

import DonationCard from './DonationCard';
import DonationTitle from './DonationTitle.js';

let titleData = {
    title: "Ultimile Donații",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
}

let firstCard = {
	photo: 'images/person_1.jpg',
	name: 'Ivan Jacobson',
	date: 'Chiar acum',
	ammount: 'MDL 3000',
	cause: 'Eveniment 1',
    causeLink: '#'
};

let secondCard = {
	photo: 'images/person_2.jpg',
	name: 'Ivan Jacobson',
	date: '2 zile în urmă',
	ammount: 'MDL 2000',
    cause: 'Eveniment 2',
    causeLink: '#'
};

let thirdCard = {
	photo: 'images/person_3.jpg',
	name: 'Ivan Jacobson',
	date: 'Săptămâna trecută',
	ammount: 'MDL 5000',
	cause: 'Eveniment 3',
    causeLink: '#'
};

function Donations() {
	return (
		<div>
			<section className="ftco-section donations">
				<div className="container">
                    <DonationTitle {...titleData} />
					<div className="row">
                        <DonationCard {...firstCard} />
                        <DonationCard {...secondCard} />
                        <DonationCard {...thirdCard} />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Donations;
