import React from 'react'
import Nav from './Nav'
import Logo from '../media/Artboard-1.png'
import LogoMobile from '../media/Isotipo.png'
import SlidePerson from '../media/personDesktop.png'
import Rectangle from '../media/Rectangle.png'
import Cuadricula from '../media/cuadricula.png'
import Flecha from '../media/flecha-header.png'
const Header = () => {
  return (
    <>
        <header>
            <div className='navegacion'>
                <img src={LogoMobile} alt="Logo" />
                <Nav/>
            </div>
            <div className='slide'>
                <div className='texto'>
                    <h3>Technology</h3>
                    <p className='text-bold'>Management experts of IT Solutions</p>
                    <p className='text-content'>We address the needs of your company through specific business areas to offer a comprehensive solution adapted to each Project.</p>
                </div>
                <div className='img-slide'>
                    <img src={SlidePerson} alt="" />    
                </div>
            </div>
            <div className='figura'><img src={Rectangle} alt="" /></div>
            <div className='cuadricula'><img src={Cuadricula} alt="" /></div>
            <div className='flecha-header'><img src={Flecha} alt="" /></div>
        </header>
    </>
  )
}

export default Header