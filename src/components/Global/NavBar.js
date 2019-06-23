import React from 'react';

import NavItem from "../Local/NavItem"

function NavBar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                <a className="navbar-brand" href="index.html">Welfare</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <NavItem link="index.html" name="Home"/>
                        <NavItem link="about.html" name="About"/>
                        <NavItem link="causes.html" name="Causes"/>
                        <NavItem link="donate.html" name="Donate"/>
                        <NavItem link="blog.html" name="Blog"/>
                        <NavItem link="gallery.html" name="Gallery"/>
                        <NavItem link="event.html" name="Events"/>
                        <NavItem link="contact.html" name="Contact"/>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
}

export default NavBar;

