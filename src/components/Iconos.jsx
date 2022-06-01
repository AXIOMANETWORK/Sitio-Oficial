import React from 'react'
import icono1 from '../media/puntos.png'
import icono2 from '../media/cubo.png'
import icono3 from '../media/puntero.png'
import icono4 from '../media/engrane.png'

const Iconos = () => {
  return (
    <div className='iconos'>
       <div>
         <div className='icono'><img src={icono1} alt="" /></div>
         <h4>73</h4>
         <p>Clients</p>
       </div>

       <div>
         <div className='icono'><img src={icono2} alt="" /></div>
         <h4>42</h4>
         <p>Cup of Coffee</p>
        </div>

       <div>
         <div className='icono'><img src={icono3} alt="" /></div>
         <h4>150</h4>
         <p>Line of Code</p>
        </div>

       <div>
         <div className='icono'><img src={icono4} alt="" /></div>
         <h4>9+</h4>
         <p>Years</p>
       </div>
    </div>
  )
}

export default Iconos