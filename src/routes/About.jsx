import React,{useState} from 'react'
import Header from '../components/Header'
import WorkProcess from '../components/WorkProcess'
import arrow from '../media/control-flecha.png'
import logo1 from '../media/pLogo1.png'
import logo2 from '../media/pLogo2.png'
import logo3 from '../media/pLogo3.png'
import logo4 from '../media/pLogo4.png'
import logo5 from '../media/pLogo5.png'
import HelpToBuild from '../components/HelpToBuild'
import OurTeam from '../components/OurTeam'
import useScreenSize from '../hooks/useScreenSize'

const About = () => {
  const {width} = useScreenSize();
  const [active, setActive] = useState(1);

  const acordeon = (item) =>{
      setActive(item);
  }

  console.log(width);
  

  return (
    <>
     <Header title="Nosotros" info="Somos una empresa de soluciones informáticas integrales: diseño web, servicios IT y marketing digital, trabajamos por y para las Pymes." />
      <div className='About'>

        <section className="SectionAboutOne">
          <h3 className="SectionAboutOne-h3">Acerca de nosotros</h3>
          <div className="SectionAboutOne-info--one">
              <div className="SectionAboutOne-parrafo1">
                <h4 className="SectionAboutOne-h4">Asesores en tecnologías de la información y Marketing Digital.</h4>
                <p> Somos una empresa fundada en la ciudad de Puerto Vallarta, Jalisco el 17 de octubre del 2012. Siendo este el primer paso para ayudar a dueños de pequeñas y medianas empresas con la publicidad en un medio de constante crecimiento como lo es la Internet. Para el año 2013 empezaba a ofrecer más servicios como son: diseño y programación de aplicaciones móviles para todo México y Estados Unidos.</p>
              </div>
              <div className="SectionAboutOne-parrafo2">
                <div className="SectionAboutOne-p">En el año 2018 cambiamos de nombre a Axioma Network nos renovamos para convertirnos en una empresa de soluciones informáticas integrales ofreciendo servicios como diseño web, soporte técnico remoto y marketing digital. </div> 
                <div className="SectionAboutOne-p">Sin duda, los logros alcanzados por la empresa rebasan con creces las expectativas de nuestra fundadora y hoy nos encontramos en camino en posicionarnos como una de las mejores empresas tecnológicas para el sector Pyme. </div> 
                <div className="SectionAboutOne-pBold">Trabajamos por y para las PYMES y profesionistas independientes. </div> 
              </div>
          </div>          
        </section>
        
        {width > 779 ? <div>"Hola Mundo"</div> : <WorkProcess/>   }
        
        
        
        <OurTeam/>
        
        <section className='History'>
            
            <div className='HistoryOne'>
              <h3 className='HistoryOne-h3'>Un poco más de nosotros</h3>
              <h4 className='HistoryOne-h4'>Potenciamos su estrategia de marketing online</h4>
              <p className='HistoryOne-p'>Abordamos las necesidades de su empresa a través de áreas específicas para ofrecer una solución integral y adaptada a cada proyecto. Impulsamos la venta de su producto o servicio con estrategias de marketing online orientadas a la captación de leads. Somos especialistas en integrar herramientas de planificación, análisis y optimización para ejecutar acciones que alcanzan los objetivos de su campaña desde el principio. </p>
              <h4 className='HistoryOne-h4'>Gestión integral de su proyecto Tecnológico.</h4>
              <p className='HistoryOne-p'>Nuestro equipo de ingenieros y gestores técnicos realiza el planteamiento y coordinación de todos los recursos, y nuestra red de técnicos, con gran capilaridad y profesionalidad, realiza la ejecución en un amplio rango geográfico.</p>
            </div>

            <div className='Historytwo'>
              <h4 className='Historytwo-h4'>Visión & Mision</h4>  
              <p className='Historytwo-p'>
                  VISION: Consolidarnos como una empresa líder en Marketing y desarrollo de software, siendo un aliado estratégico blindando servicios con altos estándares de calidad. 
              </p>
              <p className='Historytwo-p'>
                  MISION: Ser una empresa innovadora adaptándonos a las necesidades cambiantes del mercado buscando el máximo beneficio de nuestros clientes. 
              </p>
              <h4 className='Historytwo-h4'>Compromiso de Garantía</h4>  
              <p className='Historytwo-p'>
                Nuestro objetivo es maximizar la satisfacción del cliente en todos sus aspectos, por eso, además de otorgar una atención personalizada, todos los productos que fabricamos y los servicios que brindamos son evaluados mediante auditorías externas que garantizan los niveles de calidad. Así, nuestro sistema de gestión de calidad se encuentra continuamente bajo la revisión de los expertos permitiéndonos ofrecer siempre soluciones avanzadas y eficientes para garantizar el buen funcionamiento de su Informática.
              </p>
            </div>
            

        </section>

       
        <section className="questions">

            <div className="questions-title">
              <div className="questions-h3">FAQ</div>
              <div className="questions-h4">Preguntas Frecuentes</div>
            </div>
            <div className="questions-acordeon">

              <div className={ active === 1 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(1)}>
                  <h5>¿Porqué son tan accesibles sus precios?</h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                  Desde el 2012 trabajamos de manera remota lo cual hasta la fecha ha sido un éxito para la productividad y un ahorro que se ve reflejado en los precios. Además de un precio accesible brindamos servicio digno de recomendar. 
                  </p>
                </div>
              </div>

              <div className={ active === 2 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(2)}>
                  <h5>¿Para qué sirve crear una app para tu negocio? </h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                  Una app o aplicación es un programa que se descarga e instala en los dispositivos móviles, ya sean smartphones, tablets o relojes inteligentes, y permiten el acceso de manera inmediata. Esto también representa una mayor visibilidad de marca, pues toda aplicación descargada está al alcance y disponibilidad de los usuarios. 
                  </p>
                </div>
              </div>

              <div className={ active === 3 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(3)}>
                  <h5>¿Qué es SEO o posicionamiento orgánico? </h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                  El SEO o posicionamiento orgánico en buscadores, es una estrategia de marketing digital que sirve para aumentar el posicionamiento web orgánico de una página en los buscadores de internet, como Google, Bing y Yahoo! 
                  </p>
                </div>
              </div>

              <div className={ active === 4 ? "question-isActive" : "questions-item" }>
                <div className="questions-itemTitle" onClick={()=> acordeon(4)}>
                  <h5>¿Cuál es la diferencia entre SEO Y SEM?</h5>
                  <div className="arrow"><img src={arrow} alt="" /></div>
                </div>
                <div className="questions-itemContainer">
                  <p>
                  Aunque ambas son técnicas de Marketing Digital, mientras que el SEO consiste en aparecer en los primeros lugares de forma orgánica, por medio de una estrategia y sin tener que pagar al buscador, el SEM es una campaña pagada a Google Adwords. 
                  Una campaña de marketing digital SEM permite aparecer publicado en la parte superior de los resultados de búsqueda, junto a una nota que nos informa que se trata de un anuncio. 
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
        <HelpToBuild/>
      </div>
    </>
  )
}

export default About