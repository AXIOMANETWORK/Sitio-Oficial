import React from 'react'
import Menu from '../media/menu.png'
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';
function Nav() {
  return (
    <>
        <nav className='Slider-nav'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><span><Link to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link></span></li>
                <li><Link to="Services" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
            <div className='menu'><img src={Menu} alt="" /></div>
        </nav>
    </>
  )
}

export default Nav