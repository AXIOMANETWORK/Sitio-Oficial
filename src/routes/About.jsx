import React,{useState,useRef} from 'react'
import Header from '../components/Header'
import WorkProcess from '../components/WorkProcess'
import person from '../media/team.png'
import stars from '../media/star.png'
import arrow from '../media/control-flecha.png'
import logo1 from '../media/pLogo1.png'
import logo2 from '../media/pLogo2.png'
import logo3 from '../media/pLogo3.png'
import logo4 from '../media/pLogo4.png'
import logo5 from '../media/pLogo5.png'

const About = () => {

  const [active, setActive] = useState(1);
  const [next,setNext] = useState(false);
  const slideContainer = useRef(null);

  const acordeon = (item) =>{
      setActive(item);
  }

  const carrusell = (px) =>{
      slideContainer.current.style.transform = `translate(${px}px)`;
  }

  return (
    <>
     <Header title="About Us" info="Agency provides a full service range including technical skills, design, business understanding." />
      <div className='About'>

        <section className="SectionAboutOne">
          <h3 className="SectionAboutOne-h3">About</h3>
          <div className="SectionAboutOne-info--one">
            
              <h4 className="SectionAboutOne-h4">Integral management and specific to your IT project.</h4>
              <p className="SectionAboutOne-p">We address the needs of your company through specific business areas to offer a comprehensive solution adapted to each project. Our team of engineers and technical managers carry out the approach and coordination of all resources, 
                  and our network of technicians, with great experience and professionalism, carry out the execution around the Mexican Republic.
              </p>

          </div>          
          
          <div className="SectionAboutOne-info--two">

              <h4 className="SectionAboutOne-h4">We enhance your online marketing strategy</h4>
              <p className="SectionAboutOne-p">
                  We promote the sale of the product or service with online marketing strategies aimed at positioning it on the web.
              </p>  
              <p className="SectionAboutOne-p">
                  To do this, we size various agents according to the needs of the campaign, adjusting the activity and costs to the established requirements.
              </p>
              <p className="SectionAboutOne-p">
                  <ul>
                      <li> Customer Management (CRM) </li>
                      <li> Multichannel action: SEM/SEO, email marketing, display, affiliation </li>
                      <li> Design and implementation of optimized landing page </li>
                      <li> Continuous analysis monitoring to increase the conversion of your investment. </li>
                  </ul>
              </p>

          </div>          

        </section>
        <section className='History'>
            
            <div className='HistoryOne'>
              <h3 className='HistoryOne-h3'>A LITTLE HISTORY</h3>
              <h4 className='HistoryOne-h4'>Everything has a beginning</h4>
              <p className='HistoryOne-p'>We are a company founded in the city of Puerto Vallarta, Jalisco, Mexico in 2012. This is the first step to help owners of small and medium-sized businesses with advertising in a constantly growing medium such as the Internet. This is how our company began to offer design, website programming and social media services, under its first name which was Axioma Mk!.</p>
              <p className='HistoryOne-p'>2018, the year in which we changed our name to Axioma Network, we renewed ourselves to become a company of comprehensive IT solutions: web design, IT services and online marketing, we work for and for SMEs and professionals who are just beginning to work on their own with prices within reach of any pocket.</p>
            </div>

            <div className='Historytwo'>
              <h4 className='Historytwo-h4'>Visión & Mision</h4>  
              <p className='Historytwo-p'>
                  VISION: Consolidate ourselves as a leading company in Marketing and Technology, being a strategic ally for our clients, 
                  developing marketing and ICT services in an innovative way.
              </p>
              <p className='Historytwo-p'>
                  MISION: Being an innovative company adapting to business needs in search of the maximum benefit of our clients in order to increase
                  their competitiveness and productivity through creative solutions.
              </p>
            </div>

        </section>
        <WorkProcess/>
        <section className='OurTeam'>

            <div className='OurTeam-title'>
              <h3 className='OurTeam-h3'>Our Team</h3>
              <h4 className='OurTeam-h4'>Team of Designers and Developers</h4>
            </div>

            <div className='OurTeam-Cards'>

              <div className='container-cards' ref={slideContainer}>
                  <div className='card'>
                    <img src={person} alt="" />
                    <div className='card-info'>
                        <h3>Azah Anyeni</h3>
                        <h5>Designer</h5>
                    </div>
                  </div>

                  <div className='card'>
                    <img src={person} alt="" />
                    <div className='card-info'>
                        <h3>Noe</h3>
                        <h5>Designer</h5>
                    </div>
                  </div>

                  <div className='card'>
                    <img src={person} alt="" />
                    <div className='card-info'>
                        <h3>Xavi</h3>
                        <h5>Designer</h5>
                    </div>
                  </div>

              </div>

              <div className='control-cards'>
                <div className="control isActive" onClick={()=>carrusell(0)}></div>
                <div className="control" onClick={()=>carrusell(-290)}></div>
                <div className="control" onClick={()=>carrusell(-580)}></div>
              </div>

            </div>
            
        </section>
        <section className='testimonials'>

            <div className="testimonials-title">

              <div className="testimonials-h3">Testimonials</div>
              <div className="testimonials-h4">What Our Clients Saying</div>

            </div>

            <div className="testimonials-container">

                <div className="testimonials-stars"><img src={stars} alt="" /></div>

                <div className="testimonials-text">
                    A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital 
                    solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, 
                </div>

                <div className='testimonials-item'>

                  <div className="testimonials-img"></div>

                  <div className="testimonials-name">

                    <h5>Alan Martí</h5>
                    <h6>Meta Inc.</h6>

                  </div>

                </div>

            </div>

            <div className="testimonials-controls">
                  <div className="control isActive"></div>
                  <div className="control"></div>
                  <div className="control"></div>
                  <div className="control"></div>
            </div>

        </section>

        <section className="questions">

            <div className="questions-title">
              <div className="questions-h3">FAQ</div>
              <div className="questions-h4">Frequently Asked Questions</div>
            </div>
            <div className="questions-acordeon">

              <div className={ active === 1 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(1)}>
                  <h5>A digital agency is a business</h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                     Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your
                     product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.
                  </p>
                </div>
              </div>

              <div className={ active === 2 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(2)}>
                  <h5>Hire to outsource your digital</h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                     Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your
                     product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.
                  </p>
                </div>
              </div>

              <div className={ active === 3 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(3)}>
                  <h5>Marketing efforts</h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                     Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your
                     product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.
                  </p>
                </div>
              </div>

              <div className={ active === 4 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(4)}>
                  <h5>Can provide your business</h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                     Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your
                     product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.
                  </p>
                </div>
              </div>
            

            </div>

        </section>
        
        <section className='partners'>

            <div className="partners-logo"><img src={logo1} alt="" /></div>
            <div className="partners-logo"><img src={logo2} alt="" /></div>
            <div className="partners-logo"><img src={logo3} alt="" /></div>
            <div className="partners-logo"><img src={logo4} alt="" /></div>
            <div className="partners-logo"><img src={logo5} alt="" /></div>

        </section>

      </div>
    </>
  )
}

export default About