import React from 'react';
import About from './About';
import Projects from './Projects';
import Links from './Links';
import Contact from './Contact';

const LandingPage = () => {

  return (
    <div
      className='page'
    >
      <About />
      <Projects />
      <Links />
      <Contact />
    </div>
  )
}

export default LandingPage;