import React from 'react'
import Icon from '../media/icono1.png'
import Icon2 from '../media/icono2.png'
import Icon3 from '../media/icono3.png'
import Icon4 from '../media/icono4.png'



 

const Services = () => {
  return (
    <section className='services'>
        <h3>SERVICES</h3>
        <p className='text-bold'>Everything You Need</p>
        <div className='icon-services'>
            <div>
                <div className='icon'>          
                    <img src={Icon} alt="" />
                    <div className='info-icon'>
                      <h4>Marketing Digital</h4>
                      
                    </div>
                </div>
                <div className='icon'>
                <i class="fa-solid fa-phone"></i>
                    <div  className='info-icon'>
                      <h4>Desarrollo Web, Aplicaciones móviles & Tiendas en Línea</h4>
                      
                    </div>
                </div>
                <div className='icon'>
                    <img src={Icon2} alt="" />
                    <div  className='info-icon'>
                      <h4>Servicio Técnico Especializado</h4>
                      
                    </div>
                </div>
            </div>
            
            <div>
                <div className='icon'>
                    <img src={Icon3} alt="" />
                    <div  className='info-icon'>
                      <h4>Servicio de Consultoría de TI</h4>
                      
                    </div>
                </div>
                <div className='icon'>
                    <img src={Icon} alt="" />
                    <div className='info-icon'>
                      <h4>Soporte Remoto</h4>  
                    </div>
                </div>
                <div className='icon'>
                    <img src={Icon4} alt="" />
                    <div  className='info-icon'>
                      <h4>Social Media & Analytics</h4>                      
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Services