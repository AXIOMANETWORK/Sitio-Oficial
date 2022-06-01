import React from 'react'
import img1 from '../media/card1.png'
import img2 from '../media/card2.png'
import img3 from '../media/card3.png'
const OurWork = () => {
  return (
    <div className='ourWork'>
        <h3>OUR WORK</h3>
        <p className='text-bold'>OUR Projects</p>
        <div className='menu-cards'>Botones</div>
        <div className='cards'>
          <div className='card'>
            <div className='card-img'><img src={img1} alt="" /></div>
            <h4>Management System</h4>
            <p>Design</p>
          </div>

          <div className='card'>
            <div className='card-img'><img src={img2} alt="" /></div>
            <h4>Efficient Service</h4>
            <p>Technology</p>
          </div>

          <div className='card'>
            <div className='card-img'><img src={img3} alt="" /></div>
            <h4>Multifunction Tech</h4>
            <p>Medical</p>
          </div>
        </div>
        <a className='btn-light lern-more'>Learn more</a>
    </div>
  )
}

export default OurWork