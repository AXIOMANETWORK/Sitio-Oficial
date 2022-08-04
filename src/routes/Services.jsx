import React from 'react'
import Header from '../components/Header'
import arrow from '../media/control-flecha.png'
import icon from '../media/DesignIcon.png'


const Services = () => {
  return (
    <>
    <Header title="Services" info="Agency provides a full service range including technical skills, design, business understanding." />
      
      <div class="Services">

        <section className="SectionServicesOne">
          <h3 className="SectionServicesOne-h3">Services</h3>
          <div className="SectionServicesOne-info--one">
            
            <h4 className="SectionServicesOne-h4">
            Digital agency is a business you hire to outsource your digital marketing efforts
            </h4>

          </div>

          <div className="SectionServicesOne-info--two">
            <p className="SectionServicesOne-p">
            Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
            A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
            </p>
          </div>

        </section>

        <section className="SectionServicesDesign">
          <div className="SectionDesign">
            <img src={icon} alt="" />
              <h3 className='Design-h3'>Design</h3>
                <img src={arrow} alt="" />
          </div>
        </section>

        <section className="SectionServicesDesign">
          <div className="SectionDesign">
            <img src="" alt="" />
              <h3 className='Design-h3'>Development</h3>
          </div>
        </section>

        <section className="SectionServicesDesign">
          <div className="SectionDesign">
            <img src="" alt="" />
              <h3 className='Design-h3'>Marketing</h3>
          </div>
        </section>

      </div>

    </>
  )
}

export default Services