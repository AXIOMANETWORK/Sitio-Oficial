import React from 'react'
import icono1 from '../media/puntos.png'
import icono2 from '../media/cubo.png'
import icono3 from '../media/puntero.png'
import icono4 from '../media/engrane.png'

const Iconos = () => {
  return (
    <div className='seccionNumeros'>
      
      <h3>Nuestros Numeros</h3>
      <p className='text-bold'>estos 10 años</p>

      <div className='iconos'>
        <div>
          <div className='icono'><img src={icono1} alt="" /></div>
          <h4>100</h4>
          <p>Clientes</p>
        </div>

        <div>
          <div className='icono'><img src={icono2} alt="" /></div>
          <h4>3,500</h4>
          <p>tazas de café</p>
          </div>

        <div>
          <div className='icono'><img src={icono3} alt="" /></div>
          <h4>1,000,000</h4>
          <p>lineas de codigo</p>
          </div>

        <div>
          <div className='icono'><img src={icono4} alt="" /></div>
          <h4>10</h4>
          <p>Años</p>
        </div>
      </div>

    </div>
  )
}

export default Iconos