import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'lightgray',
            borderRadius: '10px',
            // color: 'white',
            marginBottom: '20px',
            height: '60px',
            animation: 'navbarFadeIn 1s ease-in-out',
            boxShadow: '0px 5px 10px #c0c0c0'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <p style={{ fontSize: '20px', color:"gray", padding:"20px", animation: 'navbarButtonFadeIn 1s ease-in-out' }}>Home</p>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
                <p style={{ fontSize: '20px', color:"gray", padding:"20px", animation: 'navbarButtonFadeIn 1.5s ease-in-out' }}>Projects</p>
            </Link>
            <Link to="/businesses" style={{ textDecoration: 'none', color: 'white' }}>
                <p style={{ fontSize: '20px', color:"gray", padding:"20px", animation: 'navbarButtonFadeIn 2s ease-in-out' }}>Businesses</p>
            </Link>
            <Link to="/connect" style={{ textDecoration: 'none', color: 'white' }}>
                <p style={{ fontSize: '20px', color:"gray", padding:"20px", animation: 'navbarButtonFadeIn 2.5s ease-in-out' }}>Connect</p>
            </Link>
        </div>
    );
}

export default Navbar;
