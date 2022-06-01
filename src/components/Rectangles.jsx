import React from 'react'
import google from '../media/google.png'
const Rectangles = () => {
  return (
    <div className='rectangles'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className='img-google' style={{backgroundImage:`url(${google})`}}></div>
      </div>
  )
}

export default Rectangles