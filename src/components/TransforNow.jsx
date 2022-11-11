import React from 'react';
import { NavLink } from 'react-router-dom';

const TransforNow = () => {
  return (
    <div className='transfor-now'>
        <div>
            <h4>Trabajemos juntos!, Contáctanos</h4>
            <p className="text-content">Conversemos sobre tus estrategias y retos tecnológicos Llena el formulario y cuéntanos más de ti en breve te contaremos mucho de nosotros</p>
        </div>
        <div>
        <NavLink to='/contact' className='btn-yellow'>Contáctanos</NavLink>
        </div>
    </div>
  )
}

export default TransforNow