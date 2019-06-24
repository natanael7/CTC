import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import IndexApp from './MainApps/IndexApp.js'
import About from './MainApps/About.js'
import Blog from './MainApps/Blog.js'
import BlogSingle from './MainApps/BlogSingle.js'
import Causes from './MainApps/Causes.js'
import Contact from './MainApps/Contact.js'
import Donate from './MainApps/Donate.js'
import Event from './MainApps/Event.js'
import Gallery from './MainApps/Gallery'

import NavBar from './components/Global/NavBar.js';
import Footer from './components/Global/Footer.js';

function Index() {
    return <IndexApp />
}

function fAbout(){
  return <About />
}

function fBlog() {
    return <Blog />
}

function fBlogSingle() {
    return <BlogSingle />
}

function fCauses() {
    return <Causes />
}

function fContact() {
    return <Contact />
}

function fDonate() {
    return <Donate />
}

function fEvent() {
    return <Event />
}

function fGallery() {
    return <Gallery />
}

function AppRouter() {
  return (
    <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Index} />
          <Route path="/index.html" exact component={Index} />
          <Route path="/about.html" exact component={About} />
          <Route path="/blog.html" exact component={fBlog} />
          <Route path="/causes.html" exact component={fCauses} />
          <Route path="/donate.html" exact component={fDonate} />
          <Route path="/gallery.html" exact component={fGallery} />
          <Route path="/event.html" exact component={fEvent} />
          <Route path="/contact.html" exact component={fContact} />
          <Footer />
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default AppRouter;