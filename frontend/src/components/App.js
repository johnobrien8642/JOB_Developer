import React, { useEffect } from 'react';
import About from './sections/About';
import Projects from './sections/Projects';
import Links from './sections/Links';
import Contact from './sections/Contact';

// uncomment below for email auth welcome page
// import WelcomePage from './auth/Welcome_Page';

import './../stylesheets/application.scss';

const App = () => {

  useEffect(() => {
    var listener = window.addEventListener('scroll', () => {
      document.querySelector('body').style.setProperty('--scroll-y', 
      `${window.scrollY}px`)
    })

    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return (
    <div
      className='page'
    >
      <About />
      <Projects />
      <Links />
      <Contact />
    </div>
  );
}

export default App;
