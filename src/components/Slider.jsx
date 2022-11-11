import React,{useState} from 'react';
import Nav from './Nav';
import SlidePerson from '../media/personDesktop.png';
import Rectangle from '../media/Rectangle.png';
import Cuadricula from '../media/cuadricula.png';
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
            <div className='Slider-container'>
                <ul className="Slider-slides">
                    <li className="Slider-slide">
                    <h3 className='Slider-h3'>Tecnología & Outsourcing</h3>
                        <p className='text-bold Slider-pTitle'>Expertos en soluciones TIC para empresas</p>
                        <p className='text-content Slider-p'>Contamos con 10 años en el mercado ofreciendo soluciones tecnológicas para PYME de diversos sectores: Turismo, Telecomunicaciones, Retail y Viajes entre otras.</p>
                    </li>
                    <li className="Slider-slide">
                    <h3 className='Slider-h3'>Marketing DIGITAL</h3>
                        <p className='text-bold Slider-pTitle'>Armamos una estrategia para potenciar tu marca</p>
                        <p className='text-content Slider-p'>Impulsamos tu producto o servicio con estrategias de marketing online orientadas a la captación de consumidores. </p>
                    </li>
                    <li className="Slider-slide">
                    <h3 className='Slider-h3'>Desarrollo</h3>
                        <p className='text-bold Slider-pTitle'>Sitios web,app móviles y software a la medida</p>
                        <p className='text-content Slider-p'>Nuestros desarrollos son escalables, robustas y fáciles de usar y trabajamos solo con las principales tecnologías de acuerdo a las necesidades de cada proyecto.</p>
                    </li>
                </ul>
            </div>
            <div className='Slider-imgPerson'>
                <img src={SlidePerson} alt="" />    
            </div>
            <div className='Slider-social'>
            <a href='https://www.facebook.com/Axioma.Network/' target="_blank"><div className="Slider-iconSocial"><img src={iconFacebook} alt="" /></div></a>
            <a href='https://mobile.twitter.com/axiomanetworkmx' target="_blank"><div className="Slider-iconSocial"><img src={iconTwitter} alt="" /></div></a>
            <a href='https://www.instagram.com/Axioma.Network/' target="_blank"><div className="Slider-iconSocial"><img src={iconInstagram} alt="" /></div></a>
            </div>
            <div className='Slider-cuadricula'><img src={Cuadricula} alt="" /></div>
            <div className='Slider-figura'><img src={Rectangle} alt="" /></div>
        </div>
    </>
  )
}

export default Slider