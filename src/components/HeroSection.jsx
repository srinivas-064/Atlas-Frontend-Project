import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import HeroImage from './atlas-image.jpg'
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <div>
      <main>
        <div className="hero-container">
            <div className="hero-content">
              <h1>
                  Let's Explore 
                  <br/>
                  the World Together
              </h1>
              <p>
                I know it's hard to do but I have to do other wise I have to face a lot of problems in my life
              </p>
              <button>
                  <NavLink to="/country">Start Exploring </NavLink>
                  <FaArrowRight />
              </button>
            </div>
            <div className="hero-image">
            <img  src={HeroImage} alt="atlas image" />
            </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
