import React from 'react'
import { Link } from 'react-router-dom'

const MyBusinesses = () => {
    return (
        <div className="businesses">
            <h1>My Businesses</h1>
            <div className="businesses-links">
                <Link to="/"><button>Back</button></Link>
            </div>
        </div>
    )
}

export default MyBusinesses