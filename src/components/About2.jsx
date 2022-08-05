import React  from 'react';
import Phone from '../media/phone.png';
import { useState } from 'react';
import Flecha from '../media/flecha.png';

const About2 = () => {
  
      const [servicio,setServicio] = useState('uno');
      
      const accordion = (e)=>{
            setServicio(e);
      }


  return (
    <>
      <section className='about'>
          <div className='about-text'>
              <h3>ABOUT</h3>
              <p className='text-bold'>Métodos de trabajo</p>
              <div>
                <div className='info-service'>
                  <div><a   onClick={()=>{accordion('uno')}}><h4>Trabajo en equipo</h4><span><img className={servicio === 'uno'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'uno' ? 'mostrar' : 'hiden'}`}>Contamos con un equipo preparado para desarrollar tus ideas</p>
                </div>

                <div className='info-service'>
                  <div><a  onClick={()=>{accordion('dos')}}><h4>Colaboración y Comunicación</h4><span><img className={servicio === 'dos'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'dos' ? 'mostrar' : 'hiden'}`}>Trabajamos con organización y con constante comunicación para entregar el producto que necesitas</p>
                </div>

                <div className='info-service'>
                  <div><a  onClick={()=>{accordion('tres')}}><h4>Optimización de flujo</h4><span><img className={servicio === 'tres'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'tres' ? 'mostrar' : 'hiden'}`}>Somos óptimos, nuestro trabajo se basa en resultados y nuestro seguimiento es continuo</p>
                </div>
              </div>
          </div>

          <div className='about-img'><img src={Phone} alt="" /></div>
      </section>
    </>
  )
}

export default About2