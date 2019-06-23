import React from 'react';

import MainSlide from '../components/App/IndexComponents/MainSlide'
import Help from '../components/App/IndexComponents/Help'
import Donations from '../components/App/IndexComponents/Donations'
import Gallery from '../components/App/IndexComponents/Gallery'
import Blog from '../components/App/IndexComponents/Blog'
import Events from '../components/App/IndexComponents/Events'

import Counter from '../components/Global/Counter'
import BeAVolunteer from '../components/Global/BeAVolunteer'

function IndexApp() {
  return (
    <div>
      <MainSlide />
      <Counter />
      <Help />
      <Donations />
      <Gallery />
      <Blog />
      <Events />
      <BeAVolunteer />
    </div>
  );
}

export default IndexApp;
