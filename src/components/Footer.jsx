import React from 'react'
import Logo from '../media/logo.png'
import ImgGodaddy from '../media/godaddy.png'
import ImgSsl from '../media/ssl.png'
import ImgIconosMedia from '../media/iconos-media.png'

const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <div className='footer1'>
          <div className='footer-logos'>
            <img src={Logo} alt="" />
            <div className="iconos-footer"><img src={ImgIconosMedia} alt="" /></div>
          </div>
          
          <div className='footer-menu'>

              <h4>MENU</h4>
              <div className='nav-footer'>
                <ul>
                  <li>About</li>
                  <li>Princing</li>
                  <li>Portafolio</li>
                </ul>
                <ul>
                  <li>Blog</li>
                  <li>Testimonials</li>
                  <li>Contact</li>
                </ul>
              </div>

          </div>

          <div className='footer-godaddy'>
            <img src={ImgGodaddy} alt="" />
            <img src={ImgSsl} alt="" />
          </div>
        </div>

        <div className='footer2'>
          <p>Copyright © 2022. All Rights Reserved.</p>
          <div className='footer2-text'>
            <p>Terms of Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer