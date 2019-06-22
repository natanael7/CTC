import React from 'react';

import FirstSlide from '../components/App/IndexComponents/FirstSlide'
import Help from '../components/App/IndexComponents/Help'
import Counter from '../components/App/IndexComponents/Counter'
import Donations from '../components/App/IndexComponents/Donations'
import Causes from '../components/App/IndexComponents/Causes'
import Gallery from '../components/App/IndexComponents/Gallery'
import Blog from '../components/App/IndexComponents/Blog'
import Events from '../components/App/IndexComponents/Events'
import BeAVolunteer from '../components/App/IndexComponents/BeAVolunteer'

function IndexApp() {
  return (
    <div>
      <FirstSlide />
      <Counter />
      <Help />
      <Causes />
      <Donations />
      <Gallery />
      <Blog />
      <Events />
      <BeAVolunteer />
    </div>
  );
}

export default IndexApp;
