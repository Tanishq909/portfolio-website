import React from 'react'

const Navbar = () => {
  return (
    <div>
      <>
        <div className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
        >
          <div className="left nav_items">Portfolio</div>
          <div className="right">
            <a href="#home" className="nav_items">Home</a>
            <a href="#about" className="nav_items">About</a>
            <a href="#projects" className="nav_items">Projects</a>
            <a href="#resume" className="nav_items">Resume</a>   {/* For future use */}
            <a href="#contact" className="nav_items">Contact</a>
          </div>
        </div>
      </>
    </div>
  )
}

export default Navbar
