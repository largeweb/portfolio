import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';
import bg from './assets/pbg7.png';

const App: React.FC = () => {

  const [me, setMe] = useState(false);

  return (
    <div className="App">
      <div style={{position:"fixed",top:"0",left:"0",bottom:"0",right:"0",backgroundColor:"lightgray",zIndex:"-2"}}></div>
      <img src={bg} className='mbg'  alt="bg" />
      <header className="App-header">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=0.7" />
        </Helmet>
        <div className='mobilecontainer'>
          <div style={{fontSize:"20px"}} className='d3d'>Hello, I'm Matt</div>
          <div style={{fontSize:"20px", width:"80%", maxWidth:"800px"}} className='d3d'><p>a seasoned developer with expertise in DeFi Development, React, and Cloud Networking. I have a history of delivering scalable solutions with a focus on speed and quality. <span onClick={(e) => setMe(true)} style={{color:"blue",fontSize:"18px",paddingLeft:"10px"}}>{!me && 'more'}</span></p></div>
          {me && <div style={{fontSize:"18px", width:"90%", maxWidth:"900px"}} id='fancydiv' className='d3d'><p>I am passionate about the work I do, and I understand the importance of staying current with the latest advancements in my field. I believe in the power of clear communication and collaboration to drive success, and I am always eager to take on new challenges. I am committed to delivering high-quality work and making a positive impact, and I am open to working on projects without compensation if the project is exciting enough. My drive and passion for this industry is what sets me apart, and I am confident in my ability to bring value to your organization. <span onClick={(e) => setMe(false)} style={{color:"blue",fontSize:"18px",paddingLeft:"10px"}}>{me && 'less'}</span></p></div>}
          <div style={{background:"transparent",display:"inline",marginBottom:"-10px",marginTop:"-10px"}}>
            <Link to="/businesses"><button className='nav-button mobilebutton d3d'>My Businesses</button></Link>
            <Link to="/projects"><button className='nav-button mobilebutton d3d'>My Projects</button></Link>
          </div>
          <div style={{background:"transparent"}}>
            <Link to="/connect"><button className='nav-button mobilebutton d3d'>Connect</button></Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
