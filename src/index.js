import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';


import App from './components/App';
import './index.css';

const Root = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));


