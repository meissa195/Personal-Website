import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
function About() {
  return (
    
    <div className='about__page'>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link className='link about' to ="/">
          <a className="navbar-brand"><span className='page-title text-secondary'>محمد</span></a>
      </Link>
      </nav>
        <div className='about__topInfo'>
            <h1>About me</h1>
            <p>My name is Mohamed Eissa. I am a highly motivated, self-starting developer seeking to build a career developing front-end applications and services. </p>
        </div>
        <div className='about__bottomInfo'>
            <h4>Skills</h4>
            <p>HTML • CSS • JS • Bootstrap • React • NodeJS • MongoDB • SQL • Mongoose • Express</p>
            <p>Java • Spring Framework</p>
        </div>
    </div>
  )
}

export default About