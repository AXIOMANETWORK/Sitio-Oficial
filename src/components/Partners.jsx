import React from 'react'
import google from '../media/GooglePartners.png';
import mercaLogo from '../media/mercaLogo.png';
import microsoft from '../media/microsoft.png';
import meta from '../media/meta.jpg';
import godaddy from '../media/godaddy.png';
import googleGMP from '../media/GoogleGMP.png';
import ssl from '../media/ssl.png';
import metaMarketing from '../media/metaMarketing.png';
import ovalBig from '../media/OvalBig.png'
import oval from '../media/Oval.png'

const Partners = () => {
  return (
    <div className='Partners'>
        <article className='Partners-article'>
          <h4 className='Partners-h4'>Partners</h4>
          <div className='Partners-logos'>
            <div className="Partners-logo"><img src={ google } alt="" /></div>
            <div className="Partners-logo"><img src={ mercaLogo } alt="" /></div>
            <div className="Partners-logo"><img src={ microsoft } alt="" /></div>
            <div className="Partners-logo"><img src={ meta } alt="" /></div>
            <div className="Partners-logo"><img src={ godaddy } alt="" /></div>
          </div>
        </article>
        
        <article className='Partners-article'>
          <h4 className='Partners-h4'>Certification</h4>
          <div className='Partners-certificados'>
              <div className="Partners-certificado"><img src={googleGMP} alt="" /></div>
              <div className="Partners-certificado"><img src={ssl} alt="" /></div>
              <div className="Partners-certificado Partners-meta"><img src={metaMarketing} alt="" /></div>
          </div>
        </article>
        <div className='Partners-ovalBig'> <img src={ovalBig} alt="" /> </div>
        <div className='Partners-ovalMedium'> <img src={oval} alt="" /> </div>
        <div className='Partners-oval'> <img src={oval} alt="" /> </div>
    </div>
  )
}

export default Partners