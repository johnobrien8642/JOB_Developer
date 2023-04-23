import React, { useEffect } from 'react';
import { ChakraProvider, useTheme } from '@chakra-ui/react';
import theme from '@chakra-ui/theme'

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
    <ChakraProvider theme={theme}>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
