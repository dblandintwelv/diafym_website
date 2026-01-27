import React from 'react'
import './Hero.css'

const Hero = ({ title, description, children }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </div>
  )
}

export default Hero
