import React, { useState,useRef } from 'react'
//import customers from '../media/customers.png'
import person from '../media/person2.png'
//import cuadricula from '../media/cuadricula.png'
import datos from '../api/testimonials.json'


const Testimonials = () => {
  const slideContainer = useRef(null);

  const [idActive,setIdActive] = useState ('01')



  const carrusell = (id) =>{
    setIdActive(id)
    if(id === '01'){
      slideContainer.current.style.transform = `translate(${0}px)`;
    }
    if(id === '02'){
      slideContainer.current.style.transform = `translate(${-315}px)`;
    }
    if(id === '03'){
      slideContainer.current.style.transform = `translate(${-630}px)`;
    }
    
}


  return (
    <div className='testimonials'>

        <div className='tile-testimonials'>
          <h3>Testimonials</h3>
          <p className='text-bold'>What Our Customers Say</p>
          <a className='btn-dark'>Contac us</a>
        </div>

        <div className='cards-testimonials'>
          <div className="content-cards" ref={slideContainer}>
              {
                datos.map(
                  item => {
                    return (
                    <div className="card-info" key={item.id} >
                    
                      <div className='card-img' style={{backgroundImage:`url(${person})`}}></div>
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.company}</p>
                      </div>
                      <p className='text-content'>{item.testimonial}</p>

                    </div>  
                    )
                  }
                )
              }
          </div>
          <div className='cards-controls'>
            
            {
              datos.map(
                item =>{
                  return(
                    <div onClick={() => carrusell(item.id)} className={item.id === idActive ? 'active' : ''} key={item.id} ></div>
                  )
                }
              )
            }
          </div>
        </div>  
      
    </div>
  )

}

export default Testimonials