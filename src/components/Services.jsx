import React from 'react'
import Icon from '../media/icono1.png'
import Icon2 from '../media/icono2.png'
import Icon3 from '../media/icono3.png'
import Icon4 from '../media/icono4.png'
const Services = () => {
  return (
    <section className='services'>
        <h3>Services</h3>
        <p className='text-bold'>Everything You Need</p>
        <div className='icon-services'>
            <div>
                <div className='icon'>
                    <img src={Icon} alt="" />
                    <div className='info-icon'>
                      <h4>Software Development</h4>
                      <p className='text-content'>Apparently we had reached a great height in the atmosphere.</p>
                    </div>
                </div>
                <div className='icon'>
                    <img src={Icon2} alt="" />
                    <div  className='info-icon'>
                      <h4>Design</h4>
                      <p className='text-content'>Atmosphere, for the sky was a dead black, and the stars had ceased.</p>
                    </div>
                </div>
            </div>
            
            <div>
                <div className='icon'>
                    <img src={Icon3} alt="" />
                    <div  className='info-icon'>
                      <h4>Data Security</h4>
                      <p className='text-content'>Reached a great height in the atmosphere, for the sky.</p>
                    </div>
                </div>
                <div className='icon'>
                    <img src={Icon4} alt="" />
                    <div  className='info-icon'>
                      <h4>Cloud Services</h4>
                      <p className='text-content'>Sky was a dead black, and the stars had ceased to twinkle.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Services