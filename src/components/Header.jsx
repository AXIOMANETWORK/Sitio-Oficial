import React from 'react'
import Nav from './Nav'

const Header = ( { title,info } ) => {
  return (
    <div class="Header">
        <nav className='Header-nav'>
            <div className='Header-nav-logo'></div>
            <Nav/>
        </nav>
        <div className="Header-text">
            <div className="Header-title">{title}</div>
            <div className="Header-info">{info}</div>
        </div>
    </div>
  )
}

export default Header