import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

function MyProjects() {
  return (
    <div className="projects-container">
        <Navbar active={'p'} />
      <div className="project">
        <img src="https://via.placeholder.com/300x200" alt="Project 1"/>
        <h2>Project 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada enim. Nam tempor justo vel aliquet blandit. Sed tristique ligula velit, vel convallis nulla malesuada id.</p>
      </div>
      <div className="project">
        <img src="https://via.placeholder.com/300x200" alt="Project 2"/>
        <h2>Project 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada enim. Nam tempor justo vel aliquet blandit. Sed tristique ligula velit, vel convallis nulla malesuada id.</p>
      </div>
      <div className="project">
        <img src="https://via.placeholder.com/300x200" alt="Project 3"/>
        <h2>Project 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada enim. Nam tempor justo vel aliquet blandit. Sed tristique ligula velit, vel convallis nulla malesuada id.</p>
      </div>
    </div>
  )
}

export default MyProjects
