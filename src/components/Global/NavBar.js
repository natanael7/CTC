import React from 'react';

import NavItem from '../Local/NavItem';
import FirstSlide from './FirstSlide';

function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<a className="navbar-brand" href="index.html">
						Centrul de Tineret Chișinău
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#ftco-nav"
						aria-controls="ftco-nav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="oi oi-menu" /> Menu
					</button>
					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							<NavItem link="index.html" name="Acasă" />
							<NavItem link="about.html" name="Despre" />
							<NavItem link="causes.html" name="Cauze" />
							<NavItem link="donate.html" name="Donează" />
							<NavItem link="blog.html" name="Blog" />
							<NavItem link="gallery.html" name="Galerie" />
							<NavItem link="event.html" name="Evenimente" />
							<NavItem link="contact.html" name="Contacte" />
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
