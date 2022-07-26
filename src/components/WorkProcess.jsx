import React from 'react'

const WorkProcess = () => {
  return (
    <div className='workProcess'>
        <h3>Process</h3>
        <p className='text-bold'>Work Process</p>
        <div className='process'>
            <div>
                <div className='circle'><h5>01</h5></div>
                <h4>Diagnóstico</h4>
                <p>Buscamos entender tu visión y necesidades hacerlas nuestras.</p>
            </div>

            <div>
                <div className='circle'><h5>02</h5></div>
                <h4>Diseño</h4>
                <p>Trabajamos contigo para diseñar una solución pensada en ti y tus usuarios.</p>
            </div>

            <div>
                <div className='circle'><h5>03</h5></div>
                <h4>Desarrollo</h4>
                <p>Desarrollamos tu sistema siguiendo metodologias ágiles de desarrollo de software.</p>
            </div>
        </div>
    </div>
  )
}

export default WorkProcess