import React from 'react';
import img from '../media/pic.png';
import { NavLink } from 'react-router-dom';

const HelpToBuild = () => {
  return (
    <div className='HelpToBuild'>
        <div className='HelpToBuild-container'>
            <div className='HelpToBuild-text'>
                <h3 className='HelpToBuild-h3'> Help To Build <br/> Your Dream <br/> Project </h3>
                <p className='HelpToBuild-p'> A digital agency is a business you hire <br/> to outsource your digital marketing <br/> efforts, instead of handling in-house. </p>
                <NavLink to='/contact' className='HelpToBuild-btn'>Contact Now</NavLink>
            </div>
            <div className='HelpToBuild-img'>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HelpToBuild