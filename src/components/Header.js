import React from 'react'
import Typed from "react-typed"

const Header = () => {
  return (
    <div className="header-container">
        <div className="main-info">
            <h1>Hi, I'm <strong>Mohamed Eissa </strong></h1>
            <Typed className='typed-text'
            strings={["Web Design", "Web Development", "Front End Development"]} 
            typeSpeed={40}
            backSpeed={60}
            loop/>
            {/* <a href="#" className='btn-header'>portfolio</a> */}
        </div>
    </div>
  )
}

export default Header 