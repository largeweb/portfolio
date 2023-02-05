import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Connect = () => {
    return (
        <div className="connect">
            <div style={{position:"fixed",top:"0",left:"0",bottom:"0",right:"0",backgroundColor:"lightgray",zIndex:"-2"}}></div>
            <Navbar active={'c'}/>
            <h1>Connect with me</h1>
            {/* <div className="connect-links">
                <Link to="/"><button>Back</button></Link>
            </div> */}
        </div>
    )
}

export default Connect