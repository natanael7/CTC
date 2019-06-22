import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import FirstSlide from './components/FirstSlide'
import Help from './components/Help'
import Counter from './components/Counter'
import Donations from './components/Donations'
import Causes from './components/Causes'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Events from './components/Events'
import BeAVolunteer from './components/BeAVolunteer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSlide />
      <Counter />
      <Help />
      <Causes />
      <Donations />
      <Gallery />
      <Blog />
      <Events />
      <BeAVolunteer />
      <Footer />
    </div>
  );
}

export default App;
