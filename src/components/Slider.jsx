import React from 'react';
import Nav from './Nav';
import SlidePerson from '../media/personDesktop.png';
import Rectangle from '../media/Rectangle.png';
import Cuadricula from '../media/cuadricula.png';
import Flecha from '../media/flecha-header.png';
import iconFacebook from '../media/iconFacebookWithe.png';
import iconTwitter from '../media/iconTwitterWithe.png';
import iconInstagram from '../media/iconInstagramWithe.png';

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
                    <h3 className='Slider-h3'>Technology</h3>
                    <p className='text-bold Slider-pTitle'>Management experts of IT Solutions</p>
                    <p className='text-content Slider-p'>We address the needs of your company through specific business areas to offer a comprehensive solution adapted to each Project.</p>
                </div>
                <div className='Slider-imgPerson'>
                    <img src={SlidePerson} alt="" />    
                </div>
                <div className='Slider-social'>
                    <div className="Slider-iconSocial"><img src={iconFacebook} alt="" /></div>
                    <div className="Slider-iconSocial"><img src={iconTwitter} alt="" /></div>
                    <div className="Slider-iconSocial"><img src={iconInstagram} alt="" /></div>
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