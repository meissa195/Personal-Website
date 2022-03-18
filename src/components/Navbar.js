import React from 'react'
import logo from "../logo.png"
import Portfolio from './Portfolio'
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

 <div className="container">
     {/* logo */}
    <a className="navbar-brand" href="#"><span className='page-title text-secondary'>محمد</span></a>
    {/* navbar toggler */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            {/* Home Page */}

            {/* Link */}

          
            <li className="nav-item">
                <a className='nav-link' href="/About.html" target="_blank">about</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#portfolio">portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#resume">resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">contact</a>
            </li>
        </ul>
  </div>
</div>
</nav>
  )
}
