import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Link as Lk, animateScroll as scroll } from "react-scroll";
const Afternav = () => {
  return (
    <div className='afternav'>
        <Lk
    activeClass="active"
    to="howitworks"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
      
      <span>How its Work</span>
      </Lk>
        <div>CATEGORIES</div>
        <div>FEATURES</div>
        <div>HOW IT WORKS</div>
        <div>FEEDBACK</div>
        

    </div>
  )
}

export default Afternav