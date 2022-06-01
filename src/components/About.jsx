import React from 'react'
import GrupoImg from '../media/Grupo2.png'
import Burbujas1 from '../media/burbujas1.png'
const About = () => {
  return (
    <>
      <section className='about'>
          <div className='about-img'><img src={GrupoImg} alt="" /></div>
          <div className='about-text'>
              <h3>ABOUT</h3>
              <p className='text-bold'>We are the Marketing and Technical Support department of your business</p>
              <p className='text-content'>We know the singularities of each economic sector where we design, propose, manage and execute projects, always respecting the agreed times and with the highest quality. Our goal is to create added value.</p>
              <a className='btn-dark'>Learn more</a>
          </div>
          <div className='about-burbujas'><img src={Burbujas1} alt="" /></div>
      </section>
    </>
  )
}

export default About