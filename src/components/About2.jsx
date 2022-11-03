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
              <h3>¿Qué hacemos?</h3>
              <p className='text-bold'>En Axioma Network</p>
              <div>
                <div className='info-service'>
                  <div><a   onClick={()=>{accordion('uno')}}><h4>Soporte Remoto</h4><span><img className={servicio === 'uno'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'uno' ? 'mostrar' : 'hiden'}`}>Imagina que cada vez que te surge una nueva duda, incidencia o problema informático tienes a tu disposición un técnico especializado que te atiende al momento y te aporta soluciones rápidas y eficaces a través de Internet sin necesidad de estar físicamente delante de tu computadora.No suena nada mal, ¿verdad? </p>
                </div>

                <div className='info-service'>
                  <div><a  onClick={()=>{accordion('dos')}}><h4>Alianzas Robustas</h4><span><img className={servicio === 'dos'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'dos' ? 'mostrar' : 'hiden'}`}>Trabajamos de la mano con organizaciones de clase mundial para entregarte la mejor combinación de tecnologías y servicios. Te ayudamos a obtener beneficios de nuestro poder de compra. Somos partners certificados de los fabricantes líderes en la industria de TI, trabajamos de la mano con ellos para entregarte servicios de alto valor agregado y acercarte a nuevas tecnologías.</p>
                </div>

                <div className='info-service'>
                  <div><a  onClick={()=>{accordion('tres')}}><h4>Software Personalizado</h4><span><img className={servicio === 'tres'? 'rotate' : ''} src={Flecha} alt="" /></span></a></div>
                  <p className={`text-content ${servicio === 'tres' ? 'mostrar' : 'hiden'}`}>Manufactura y producción Finanzas y contabilidad Recursos humanos Ventas y marketing Y más</p>
                </div>
              </div>
          </div>

          <div className='about-img'><img src={Phone} alt="" /></div>
      </section>
    </>
  )
}

export default About2