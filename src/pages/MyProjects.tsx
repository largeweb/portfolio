import React from 'react'
import { Link } from 'react-router-dom'

const MyProjects = () => {
    return (
        <div className="businesses">
            <h1>My Projects</h1>
            <div className="businesses-links">
                <Link to="/"><button>Back</button></Link>
            </div>
        </div>
    )
}

export default MyProjects