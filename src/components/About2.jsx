import React  from 'react';
import Phone from '../media/phone.png';
import { useState } from 'react';
import Flecha from '../media/flecha.png'
const About2 = () => {
      const [servicio,setServicio] = useState('');
      
      const accordion = (e)=>{
            setServicio(e);
      }

  return (
    <>
      <section className='about'>
          <div className='about-text'>
              <h3>ABOUT</h3>
              <p className='text-bold'>24/7 Support</p>
              <div>
                <div className='info-service'>
                  <div><a  onClick={()=>{accordion('uno')}}><h4>Advisory Team</h4><span><img className={servicio === 'uno'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'uno' ? 'mostrar' : 'hiden'}`}>We know the singularities of each economic sector where we design, propose, manage and execute projects, always respecting the agreed times and with the highest quality. Our goal is to create added value.</p>
                </div>

                <div className='info-service'>
                  <div><a onClick={()=>{accordion('dos')}}><h4>Consulting Services</h4><span><img className={servicio === 'dos'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'dos' ? 'mostrar' : 'hiden'}`}>We know the singularities of each economic sector where we design, propose, manage and execute projects, always respecting the agreed times and with the highest quality. Our goal is to create added value.</p>
                </div>

                <div className='info-service'>
                  <div><a onClick={()=>{accordion('tres')}}><h4>Help Center</h4><span><img className={servicio === 'tres'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'tres' ? 'mostrar' : 'hiden'}`}>We know the singularities of each economic sector where we design, propose, manage and execute projects, always respecting the agreed times and with the highest quality. Our goal is to create added value.</p>
                </div>
              </div>
          </div>

          <div className='about-img'><img src={Phone} alt="" /></div>
      </section>
    </>
  )
}

export default About2