import React, { useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import LandingPage from './sections/Landing_Page';

// uncomment below for email auth welcome page
// import WelcomePage from './auth/Welcome_Page';
import './../stylesheets/application.scss';

const App = () => {
const theme = extendTheme({
  semanticTokens: {
    colors: {
      body: {
        bg: 'gray.50'
      }
    }
  }
})
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
