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
     {/* can i make this link go back to the top also? */}
     <Link className='link' to ="/">
        <a className="navbar-brand"><span className='page-title text-secondary'>محمد</span></a>
     </Link>
    {/* navbar toggler */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            {/* Home Page */}

            {/* Link */}

          <Link className='link' to="/about">
            <li className="nav-item">
                <a className='nav-link'>about</a>
            </li>
          </Link>
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
