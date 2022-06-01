import React from 'react'
import Menu from '../media/menu.png'
function Nav() {
  return (
    <>
        <nav>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Portafolio</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className='menu'><img src={Menu} alt="" /></div>
        </nav>
    </>
  )
}

export default Nav