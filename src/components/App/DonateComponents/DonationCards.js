import React from 'react';

import DonationCard from '../IndexComponents/DonationCard';
import DonationTitle from '../IndexComponents/DonationTitle';

let titleData = {
    title: "Latest Donations",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
}

let firstCard = {
	photo: 'images/person_1.jpg',
	name: 'Ivan Jacobson',
	date: 'Just now',
	ammount: '$300',
	cause: 'Children Needs Food',
    causeLink: '#'
};

let secondCard = {
	photo: 'images/person_2.jpg',
	name: 'Ivan Jacobson',
	date: 'Just now',
	ammount: '$150',
    cause: 'Children Needs Food',
    causeLink: '#'
};

let thirdCard = {
	photo: 'images/person_3.jpg',
	name: 'Ivan Jacobson',
	date: 'Just now',
	ammount: '$250',
	cause: 'Children Needs Food',
    causeLink: '#'
};

function DonationCards() {
	return (
		<div>
			<section className="ftco-section donations">
				<div className="container">
                    <DonationTitle {...titleData} />
					<div className="row">
                        <DonationCard {...firstCard} />
                        <DonationCard {...secondCard} />
                        <DonationCard {...thirdCard} />

                        <DonationCard {...secondCard} />
                        <DonationCard {...thirdCard} />
						<DonationCard {...firstCard} />

                        <DonationCard {...thirdCard} />
						<DonationCard {...firstCard} />
                        <DonationCard {...secondCard} />
					</div>
				</div>
			</section>
		</div>
	);
}

export default DonationCards;
