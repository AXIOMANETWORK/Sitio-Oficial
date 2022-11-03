import React from 'react'
import Icon from '../media/icono1.png'
import Icon2 from '../media/icono2.png'
import Icon3 from '../media/icono3.png'
import Icon4 from '../media/icono4.png'

const Services = () => {
  return (
    <section className='Services'>
        <h3>Servicios</h3>
        <p className='text-bold Services-p'>Todo lo que necesitas lo tenemos aquí</p>
        
              <div className='Services-iconos'>

                <div className='Services-icon'>          
                    <img src={Icon} alt="" />
                    <div className='Services-infoIcon'>
                      <h4>Desarrollo Web & Móvil</h4>
                      <p>Ayudamos a las empresas a elevar su valor a través del desarrollo personalizado, diseño de productos, control de calidad y consultoría.</p>
                    </div>
                </div>

                <div className='Services-icon'>
                    <img src={Icon2} alt="" />
                    <div  className='Services-infoIcon'>
                      <h4>Marketing</h4>
                      <p>Ayudamos a tu marca a elevar su valor a través del desarrollo de un plan de marketing personalizado, análisis de social media, diseño de productos, control de calidad.</p>
                    </div>
                </div>

            </div>
            
            <div className='Services-iconos'>

                <div className='Services-icon'>
                    <img src={Icon3} alt="" />
                    <div  className='Services-infoIcon'>
                      <h4>Diseño</h4>
                      <p>Diseñamos desde el logotipo hasta toda la imagen corporativa completa, para que estés listo para empezar con una campaña de Marketing Digital.</p>
                    </div>
                </div>

                <div className='Services-icon'>
                    <img src={Icon4} alt="" />
                    <div  className='Services-infoIcon'>
                      <h4>Servicios IT</h4>           
                      <p>Dispondrá de profesionales a la medida de sus necesidades, que mejorarán el rendimiento de los procesos de trabajo y le permitirán destinar recursos a otras áreas.</p>           
                    </div>
                </div>

            </div>
            <a className='btn-dark'>Leer Más</a>
    </section>
  )
}

export default Services