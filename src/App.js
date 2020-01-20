import React from 'react';

import Header from './components/Header';
import Routes from './Routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>

      <div className='content'>
        <Routes />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
