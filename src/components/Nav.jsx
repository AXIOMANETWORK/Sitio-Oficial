import React from 'react'
import Menu from '../media/menu.png'
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <>
        <nav className='Slider-nav'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>Nosotros</NavLink></li>
                <li><NavLink to='/services'>Servicios</NavLink></li>
                <li><NavLink to='/contact'>Contacto</NavLink></li>
            </ul>
            <div className='menu'><img src={Menu} alt="" /></div>
        </nav>
    </>
  )
}

export default Nav