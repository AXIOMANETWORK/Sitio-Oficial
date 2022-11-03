import React from 'react'

const WorkProcess = () => {
  return (
    <div className='workProcess'>
        <h3>Te mostramos como trabajamos</h3>
        <p className='text-bold'>Nuestro Proceso</p>
        <div className='process'>
            <div>
                <div className='circle'><h5>01</h5></div>
                <h4>Planeacion</h4>
                <p>Buscamos entender tu visión y necesidades hacerlas nuestras. Trabajamos contigo para diseñar una solución pensada en ti y tus clientes.</p>
            </div>

            <div>
                <div className='circle'><h5>02</h5></div>
                <h4>Diseño</h4>
                <p>Trabajamos contigo para diseñar una solución pensada en ti y tus usuarios.</p>
            </div>

            <div>
                <div className='circle'><h5>03</h5></div>
                <h4>Desarrollo</h4>
                <p>Seguimos los estándares de código mundiales cuidando la calidad de nuestros desarrollos.</p>
            </div>
        </div>
    </div>
  )
}

export default WorkProcess