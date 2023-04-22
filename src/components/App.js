import React, { useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import LandingPage from './sections/Landing_Page';

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
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
