import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=0.7" />
        </Helmet>
        <h1>Web3, Blockchain & The Metaverse</h1>
        <nav>
          <Link to="/businesses"><button className='nav-button'>My Businesses</button></Link>
          <Link to="/projects"><button className='nav-button'>My Projects</button></Link>
        </nav>
        <nav>
          <Link to="/connect"><button className='nav-button'>Connect</button></Link>
        </nav>
      </header>
    </div>
  );
};

export default App;
