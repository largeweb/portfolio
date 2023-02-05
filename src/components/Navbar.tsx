import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props: any) => {

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
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"10px", animation: 'navbarButtonFadeIn 0.9s ease-in-out' }}>Home</p> </Link>
            {props.active!='p' && <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"10px", animation: 'navbarButtonFadeIn 1.3s ease-in-out' }}>Projects</p> </Link>}
            {props.active!='b' && <Link to="/businesses" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"10px", animation: 'navbarButtonFadeIn 1.7s ease-in-out' }}>Businesses</p> </Link>}
            {props.active!='c' && <Link to="/connect" style={{ textDecoration: 'none', color: 'white' }}> <p style={{ fontSize: '1.2rem', color:"gray", padding:"20px", animation: 'navbarButtonFadeIn 2.1s ease-in-out' }}>Connect</p> </Link>}
        </div>
    );
}

export default Navbar;
