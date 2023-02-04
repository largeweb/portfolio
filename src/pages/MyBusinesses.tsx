import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

function MyBusinesses() {
  return (
    <div className="businesses-container">
        <Navbar active={'b'}/>
      <div className="business">
        <img src="https://via.placeholder.com/300x200" alt="Business 1"/>
        <h2>Business 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada enim. Nam tempor justo vel aliquet blandit. Sed tristique ligula velit, vel convallis nulla malesuada id.</p>
        <div className="business-metrics">
          <p>Revenue: $10,000</p>
          <p>Customers: 100</p>
        </div>
      </div>
      <div className="business">
        <img src="https://via.placeholder.com/300x200" alt="Business 2"/>
        <h2>Business 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada enim. Nam tempor justo vel aliquet blandit. Sed tristique ligula velit, vel convallis nulla malesuada id.</p>
        <div className="business-metrics">
          <p>Revenue: $20,000</p>
          <p>Customers: 200</p>
        </div>
      </div>
      <div className="business">
        <img src="https://via.placeholder.com/300x200" alt="Business 3"/>
        <h2>Business 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada enim. Nam tempor justo vel aliquet blandit. Sed tristique ligula velit, vel convallis nulla malesuada id.</p>
        <div className="business-metrics">
          <p>Revenue: $30,000</p>
          <p>Customers: 300</p>
        </div>
      </div>
    </div>
  )
}

export default MyBusinesses
