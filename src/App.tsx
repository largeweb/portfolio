import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  const [activeButton, setActiveButton] = useState('businesses');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Web3, Blockchain & The Metaverse</h1>
        <nav>
          <button
            className={`nav-button ${activeButton === 'businesses' ? 'active' : ''}`}
            onClick={() => setActiveButton('businesses')}
          >
            <Link to="/businesses">My Businesses</Link>
          </button>
          <button
            className={`nav-button ${activeButton === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveButton('projects')}
          >
            <Link to="/projects">My Projects</Link>
          </button>
          <button
            className={`nav-button ${activeButton === 'connect' ? 'active' : ''}`}
            onClick={() => setActiveButton('connect')}
          >
            <Link to="/connect">Connect</Link>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default App;
