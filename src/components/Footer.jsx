import React from 'react'
import logoBlack from '../media/logoBlack.png';
import iconFacebook from '../media/iconFacebook.png';
import iconTwitter from '../media/iconTwitter.png';
import iconInstagram from '../media/iconInstagram.png';

const Footer = () => {
  return (
    <footer className='Footer'>

      <div className='Footer-logos'>
        <div className='Footer-logo'>
          <img src={ logoBlack } alt="" />
        </div>
        <div className='Footer-iconSocial'>
          <img src={ iconFacebook } alt="" />
          <img src={ iconTwitter } alt="" />
          <img src={ iconInstagram } alt="" />
        </div>
      </div>

      <div className='Footer-text'>
        <div>
          <p>Copyright © 2022. All Rights Reserved.</p>
        </div>
        <div>
          <p>Terms of Conditions &nbsp; &nbsp; &nbsp; Privacy Policy</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer