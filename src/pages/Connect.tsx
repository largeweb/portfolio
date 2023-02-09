import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Connect = () => {

    const [m, sm] = React.useState('');

    return (
        <div className="connect">
            <div style={{position:"fixed",top:"0",left:"0",bottom:"0",right:"0",backgroundColor:"lightgray",zIndex:"-2"}}></div>
            <Navbar active={'c'}/>
            <h1>Connect with me</h1>
            {/* Text Area for value m */}
            <textarea className='connectTextArea ' style={{background:"lightgray",color:"black",fontSize:"18px"}} placeholder='Leave a Message?' value={m} onChange={(e) => sm(e.target.value)}></textarea>
            {1 && <button style={{outline:"none"}} className={m ? 'connectSend' : 'connectSendInvisible'}>Send</button>}
            {/* <div className="connect-links">
                <Link to="/"><button>Back</button></Link>
            </div> */}
        </div>
    )
}

export default Connect