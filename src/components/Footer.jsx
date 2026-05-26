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
          <a href='https://www.facebook.com/Axioma.Network/' target="_blank" rel="noopener noreferrer"><img src={iconFacebook} alt="" /></a>
          <a href='https://mobile.twitter.com/axiomanetworkmx' target="_blank" rel="noopener noreferrer"><img src={iconTwitter} alt="" /></a>
          <a href='https://www.instagram.com/Axioma.Network/' target="_blank" rel="noopener noreferrer"><img src={iconInstagram} alt="" /></a>
        </div>
      </div>

      <div className='Footer-text'>
        <div>
          <p>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
        <div>
          <p>Terms of Conditions &nbsp; &nbsp; &nbsp; Privacy Policy</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer