import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <NavLink to="/">
                    <button>OurAtals</button>
                </NavLink>
            </div>
            <nav>
                <ul className='nav-web'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/country">Country</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
