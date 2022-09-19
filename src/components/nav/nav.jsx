import React from 'react'
import './nav.css'
import Hamburger from 'hamburger-react'

const Nav = () => {

  const [isOpen,setIsOpen] = React.useState(false)

  return (
    <nav className="navbar">
      <div className="nav-main">
        <div className="name">
          <h2>Anthony Tan <span>Computer Science Student</span></h2>
        </div>

        <div className='hamburger-container'>
          <Hamburger toggled={isOpen} toggle={setIsOpen}></Hamburger>
        </div>

        <div className="links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experiences">Experience</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      { isOpen ?
        <div className='nav-hidden'>
          <div className="hidden-links">
            <ul>
              <a href="#about"><li>About</li></a>
              <a href="#projects"><li>Projects</li></a>
              <a href="#experiences"><li>Experience</li></a>
              <a href="#awards"><li>Awards</li></a>
              <a href="#contact"><li>Contact</li></a>
            </ul>
          </div>
        </div> : <></>
    }
    </nav>
  )
}

export default Nav