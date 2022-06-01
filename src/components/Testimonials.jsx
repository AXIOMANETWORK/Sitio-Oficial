import React from 'react'
import customers from '../media/customers.png'
import person from '../media/person2.png'
import cuadricula from '../media/cuadricula.png'
const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='tile-testimonials'>
          <h3>Testimonials</h3>
          <p className='text-bold'>What Our Customers Say</p>
          <a className='btn-dark'>Contac us</a>
        </div>

      
        <div className='cards-testimonials'>
          <div className='content-cards'>
              
              <div className='card-img' style={{backgroundImage:`url(${person})`}}></div>

              <div>
                <h4>Ainara Vergara</h4>
                <p>Microsoft</p>
              </div>
              <p className='text-content'>"Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse."</p>
          </div>
          <div className='cards-controls'>
            <div className='active'></div>
            <div></div>
            <div></div>
          </div>
        </div>  

        
      
    </div>
  )
}

export default Testimonials