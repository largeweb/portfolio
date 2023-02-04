import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({active}) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'lightgray',
            borderRadius: '10px',
            // color: 'white',
            height: '60px',
            maxWidth: '1100px',
            width: '100%',
            animation: 'navbarFadeIn 1s ease-in-out',
            boxShadow: '0px 5px 10px #c0c0c0',
            margin: '0 auto',
            marginBottom: '20px'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"10px", animation: 'navbarButtonFadeIn 0.5s ease-in-out' }}>Home</p> </Link>
            {active!='p' && <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"10px", animation: 'navbarButtonFadeIn 0.9s ease-in-out' }}>Projects</p> </Link>}
            {active!='b' && <Link to="/businesses" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"10px", animation: 'navbarButtonFadeIn 1.3s ease-in-out' }}>Businesses</p> </Link>}
            {active!='c' && <Link to="/connect" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"20px", animation: 'navbarButtonFadeIn 1.7s ease-in-out' }}>Connect</p> </Link>}
        </div>
    );
}

export default Navbar;
