import React from 'react'
import GrupoImg from '../media/Grupo2.png';

const About = () => {
  return (
    <>
      <section className='about'>
          <div className='about-img'><img src={GrupoImg} alt="" /></div>
          <div className='about-text'>
              <h3>ASESORES EN TECNOLOGIAS DE LA INFORMACION</h3>
              <p className='text-bold'>Abordamos las necesidades de tu empresa a través de áreas específicas para ofrecer una solución integral.</p>
              <p className='text-content'>We know the singularities of each economic sector where we design, propose, manage and execute projects, always respecting the agreed times and with the highest quality. Our goal is to create added value.</p>
              <a className='btn-dark'>Leer Más</a>
          </div>
          
      </section>
    </>
  )
}

export default About