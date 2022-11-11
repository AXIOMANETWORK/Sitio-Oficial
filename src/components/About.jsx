import React from 'react'
import GrupoImg from '../media/Grupo2.png';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className='about' id='About'>
          <div className='about-img'><img src={GrupoImg} alt="" /></div>
          <div className='about-text'>
              <h3>ASESORES EN TECNOLOGIAS DE LA INFORMACION</h3>
              <p className='text-bold'>Abordamos las necesidades de tu empresa a través de áreas específicas para ofrecer una solución integral.</p>
              <p className='text-content'>Somos una empresa de soluciones informáticas integrales: diseño web, servicios IT y marketing digital, trabajamos por y para las Pymes...</p>
              <NavLink to='/about' className='btn-dark'>Leer Más</NavLink>
          </div>
          
      </section>
    </>
  )
}

export default About