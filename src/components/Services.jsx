import React from 'react'
import Icon from '../media/icono1.png'
import Icon2 from '../media/icono2.png'
import Icon3 from '../media/icono3.png'
import Icon4 from '../media/icono4.png'

const Services = () => {
  return (
    <section className='Services'>
        <h3>SERVICES</h3>
        <p className='text-bold Services-p'>Everything You Need</p>
        
              <div className='Services-iconos'>

                <div className='Services-icon'>          
                    <img src={Icon} alt="" />
                    <div className='Services-infoIcon'>
                      <h4>Marketing Digital</h4>
                      <p>Apparently we had reached a great height in the atmosphere.</p>
                    </div>
                </div>

                <div className='Services-icon'>
                    <img src={Icon2} alt="" />
                    <div  className='Services-infoIcon'>
                      <h4>Servicio Técnico Especializado</h4>
                      <p>Reached a great height in the atmosphere, for the sky.</p>
                    </div>
                </div>

            </div>
            
            <div className='Services-iconos'>

                <div className='Services-icon'>
                    <img src={Icon3} alt="" />
                    <div  className='Services-infoIcon'>
                      <h4>Servicio de Consultoría de TI</h4>
                      <p>Atmosphere, for the sky was a dead black, and the stars had ceased.</p>
                    </div>
                </div>

                <div className='Services-icon'>
                    <img src={Icon4} alt="" />
                    <div  className='Services-infoIcon'>
                      <h4>Social Media & Analytics</h4>           
                      <p>Sky was a dead black, and the stars had ceased to twinkle.</p>           
                    </div>
                </div>

            </div>
            
    </section>
  )
}

export default Services