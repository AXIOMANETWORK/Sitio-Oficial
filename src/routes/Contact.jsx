import React,{useState} from 'react'
import Header from '../components/Header';
import phone from '../media/Path.png';
import email from '../media/Email.png';
import ubi from '../media/Ubi.png';

const Contact = () => {
  return (
    <>
    <Header title="Contáctanos" info="Conversemos sobre tus estrategias y retos tecnológicos Llena el formulario y cuéntanos más de ti en breve te contaremos mucho de nosotros" />
    <div className='Contact'>
      
      <section className='section-itemMap'>
        <div className='container-items'>
          <div className='container-form'>
            <form action="" className='formitem'>
              <h4>Get In Touch</h4><br />
              <input type="text" placeholder='YourEmail' /><br />
              <input type="text" placeholder='Subject' /><br />
              <input type="textArea" placeholder='Message' /><br />
              <input type="submit" className='btnsubmit' placeholder='Submit' value='SUBMIT NOW'/>
            </form>
          </div>
          {/* Aqui iria el Mapa*/}
          <div className='container-map'>

          </div>
        </div>
      </section>

      <section className='section-itemsContact'>
        <div className='containers-contact'>
          <div className='item-contact'>
            <div className='title-image'><img src={phone} className='icon-title' /><h4>PHONE</h4></div>
            <p>+52 322 263 4115</p>
          </div>
          <div className='item-contact'>
            <div className='title-image'><img src={phone} alt="" /><h4>EMAIL</h4></div>
            <p>info@axioma.network</p>
          </div>
          <div className='item-contact'>
            <div className='title-image'><img src={ubi} alt="" /><h4>ADDRESS</h4></div>
            <p>VILLAS RIO EDIF.1C DEP.7,Puerto Vallarta,Jal.</p>
          </div>
        </div>
      </section>
      
    </div>

    </>
  )
}

export default Contact