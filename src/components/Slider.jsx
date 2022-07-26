import React from 'react'
import Nav from './Nav'
import SlidePerson from '../media/personDesktop.png'
import Rectangle from '../media/Rectangle.png'
import Cuadricula from '../media/cuadricula.png'
import Flecha from '../media/flecha-header.png'
const Slider = () => {
    
  return (
    <>
        <div className="Slider">
            <div className='Slider-navegacion'>
                <div className="Slider-logo"></div>
                <Nav/>
            </div>
            <div className='Slider-slide'>
                <div className='Slider-texto'>
                    <h3>Technology</h3>
                    <p className='text-bold'>Management experts of IT Solutions</p>
                    <p className='text-content'>We address the needs of your company through specific business areas to offer a comprehensive solution adapted to each Project.</p>
                </div>
                <div className='Slider-imgPerson'>
                    <img src={SlidePerson} alt="" />    
                </div>
            </div>
            <div className='Slider-cuadricula'><img src={Cuadricula} alt="" /></div>
            <div className='Slider-figura'><img src={Rectangle} alt="" /></div>
            <div className='Slider-flechaHeader'><img src={Flecha} alt="" /></div>
            
        </div>
    </>
  )
}

export default Slider