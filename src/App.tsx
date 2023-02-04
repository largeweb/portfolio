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
          <button
            className={`nav-button`}
            // onClick={() => setActiveButton('businesses')}
          >
            <Link to="/businesses">My Businesses</Link>
          </button>
          <button
            className={`nav-button`}
            // onClick={() => setActiveButton('projects')}
          >
            <Link to="/projects">My Projects</Link>
          </button>
          <button
            className={`nav-button`}
            // onClick={() => setActiveButton('connect')}
          >
            <Link to="/connect">Connect</Link>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default App;
