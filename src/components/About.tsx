import React from 'react'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  
  return(
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Back to Task Tracker</Link>
    </div>
  )
}

export default About