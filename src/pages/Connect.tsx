import React from 'react';
import { Link } from 'react-router-dom';

const Connect = () => {
    return (
        <div className="connect">
            <h1>Connect with me</h1>
            <div className="connect-links">
                <Link to="/"><button>Back</button></Link>
            </div>
        </div>
    )
}

export default Connect