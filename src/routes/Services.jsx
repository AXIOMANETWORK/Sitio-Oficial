import React,{useState} from 'react'
import Header from '../components/Header'
import icondown from '../media/down.png'
import icon from '../media/design.png'
import develop from '../media/Desarrollo-Web-movil.png'
import market from '../media/marketing.png'
import iticon from '../media/Servicio-IT.png'
import check from '../media/check.png'
import minus from '../media/minus.png'
import plus from '../media/plus.png'
import design from '../media/design-caracteristicas.jpg'
import desarrollo from '../media/desarrollo-caracteristicas.jpg'
import marketing from '../media/marketing-caracteristicas.png'
import it from '../media/it-caracteristicas.jpg'


const Services = () => {
  const [active,setActive] = useState("desing");

  const manejadorTarjetas = ( valor ) => {
    if (valor === "desing" ) {
        setActive("desing");
    }
    if (valor === "development" ) {
      setActive("development");
    }
    if (valor === "marketing" ) {
      setActive("marketing");
    }

    if (valor === "it" ) {
      setActive("it");
    }
    
  }



  return (
    <>

    <Header title="Services" info="Agency provides a full service range including technical skills, design, business understanding." />
      
    <div className="Services">
        
      <section className='Section-Servicio'>
        <h3>¿Que Hacemos?</h3>
        <div className='Section-items'>
          <div className='Section-itemP'>
            <p className='Section-P'>Nuestro Objetivo fundamental es proponer e implantar soluciones a medida con rapidez, ofreciendo flexibilidad y compromiso. </p>
            <p className='Section-P'>"Apoyamos a nuestros clientes de forma eficiente a lo largo de todo el proceso creativo y de desarrollo de software o marketing hasta lograr sus objetivos." <br />
            Adicionalmente brindamos servicios de soporte técnico remoto, asesoría en compras de equipo, instalación de redes (cableado estructurado) y capacitaciones. </p>
          </div>
        </div>
      </section>
      
      <section className='Services-containerItems'>
          
          <div className='Services-item'>
            <div className='Services-itemTitle' onClick={ () =>{ manejadorTarjetas("desing") }}>
                <div className='Services-itemIcon'><img src={icon} className='Services-titleImg'/><h4 className='Services-itemH4'>Design</h4></div>
                <div className={ active === "desing" ? 'Services-itemArrow' : 'Services-itemArrowIsActiva'}><img src={icondown}></img></div>
            </div>
            <div className={ active === "desing" ? 'Services-itemInfo' : 'Services-Hidden' } >
                  <div className='Services-itemimg'>
                    <img src={design} />
                  </div>
                  <div className='Services-itemList'>
                  <p className='Services-itemP'>Conectamos la esenciad e tu negocio transmitiendolo en un logotipo que refleje el verdadero ADN de tu marca</p>
                  <p className='Services-itemP'>Nuestro proposito es transmitir el verdadero valor de tu marca para hacerla creer exponencialmente y conectar con tu mercado</p>  
                    <span className='Services-itemSpan'><img src={check} /><p>Diseño Publicitario impreso y digital</p></span>
                    <span className='Services-itemSpan'><img src={check} /><p>Diseño de Marca e imagen digital</p></span>
                    <span className='Services-itemSpan'><img src={check} /><p>Diseño Web</p></span>
                  </div>
            </div>
          </div>

          <div className='Services-item'>
            <div className='Services-itemTitle' onClick={ () =>{ manejadorTarjetas("development") }}>
                <div className='Services-itemIcon'><img src={develop} className='Services-titleImg'/><h4 className='Services-itemH4'>Desarrollo</h4></div>
                <div className={ active === "development" ? 'Services-itemArrow' : 'Services-itemArrowIsActiva'}><img src={icondown}></img></div>
            </div>
            <div className={ active === "development" ? 'Services-itemInfo' : 'Services-Hidden' } >
                  <div className='Services-itemimg'>
                    <img src={desarrollo} />
                  </div>
                  <div className='Services-itemList'>
                    <p className='Services-itemP'>Desarrollo Web</p>
                    <p className='Services-itemP'>Somos especialistas en páginas web y sistemas integrales, nuestro objetivo es lograr la unificación y eficiencia en los procesos de tu empresa, a través de la creación de fórmulas, algoritmos y procesos únicos. Nosotros nos adaptamos según las necesidades de tu negocio.</p>
                    <p className='Services-itemP'>Desarrollo Movil</p>
                    <p className='Services-itemP'>Ayudamos a las empresas a elevar su valor a través del desarrollo de software personalizado, diseño de productos, control de calidad y consultoría.</p>
                  </div>
            </div>
          </div>

          <div className='Services-item'>
            <div className='Services-itemTitle' onClick={ () =>{ manejadorTarjetas("marketing") }}>
                <div className='Services-itemIcon'><img src={market} className='Services-titleImg'/><h4 className='Services-itemH4'>Marketing</h4></div>
                <div className={ active === "marketing" ? 'Services-itemArrow' : 'Services-itemArrowIsActiva'}><img src={icondown}></img></div>
            </div>
            <div className={ active === "marketing" ? 'Services-itemInfo' : 'Services-Hidden' }>
                  <div className='Services-itemimg'>
                    <img src={marketing} />
                  </div>                  
                  <div className='Services-itemList'>
                    <p className='Services-itemP'>Ayudamos a tu marca a elevar su valor a traves del desarrollo de un plan de marketing personalizado, analisis de socio media, diseño de productos, control de calidad</p>
                    <span className='Services-itemSpan'><img src={check} /><p>CONSULTORIA</p></span>
                    <span className='Services-itemSpan'><img src={check} /><p>CREACION Y ADMINISTRACION DE REDES SOCIALES</p></span>
                    <span className='Services-itemSpan'><img src={check} /><p>ANALISIS Y ENTREGA DE METRICAS</p></span>
                  </div>
            </div>
          </div>

          <div className='Services-item'>
            <div className='Services-itemTitle' onClick={ () =>{ manejadorTarjetas("it") }}>
                <div className='Services-itemIcon'><img src={iticon} className='Services-titleImg'/><h4 className='Services-itemH4'>IT</h4></div>
                <div className={ active === "it" ? 'Services-itemArrow' : 'Services-itemArrowIsActiva'}><img src={icondown}></img></div>
            </div>
            <div className={ active === "it" ? 'Services-itemInfo' : 'Services-Hidden' }>
            <div className='Services-itemimg'>
                    <img src={it} />
                  </div>
                  <div className='Services-itemList'>
                    <p className='Services-itemP'>Soportar las operaciones y los servicios tecnológicos de tu negocio puede convertirse en verdadero dolor de cabeza si no cuentas con la estrategia adecuada. <br />
                    Axioma te facilita los recursos y esquemas necesarios para asegurar la continuidad de tus operaciones. <br />
                    Te ofrecemos acompañamiento y servicios administrados para tus operaciones de TI, nuestra área de soporte técnico será una extensión importante de tu equipo. <br /></p>
                    <span className='Services-itemSpan'><p>Servicios Administrados</p></span>
                    <p>Administramos por completo tu centro de datos y te ayudamos a diseñar, migrar y administrar tus cargas de trabajo en la nube.</p><br />
                    <span className='Services-itemSpan'><p>Soporte Tecnico</p></span>
                    <p>Obtén ayuda de ingenieros especializados para mantener y reparar tu infraestructura, llevar a cabo actualizaciones de software y otras actividades bajo demanda.</p><br />
                    <span className='Services-itemSpan'><p>Outsourcing de Personal</p></span>
                    <p>Seleccionamos el talento requerido para reforzar tu estructura de TI, ya sea de forma temporal o permanente. <br /> </p>
                  </div>
            </div>
          </div>

      </section>

        
        <div className='prices-titles'>
            <h3>PRECIOS</h3>
            <h4>Planes de Desarrollo</h4>
        </div>
      <section className='prices-containeritem'>
          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>BASICO</h4></div>
            <div className='prices-itemprice'><h3>$4,500</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Instalacion y configuracion</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Hasta 5 paginas web</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño web responsivo</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Optimizada para buscadores</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Iconos de redes sociales</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Creacion de correos empresariales</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Widget de contacto y atencion a clientes</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>AVANZADO</h4></div>
            <div className='prices-itemprice'><h3>$8,900</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Instalacion y configuracion</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Hasta 10 paginas</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño web responsivo</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño personalizado y optimizado</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Creacion e instalacion de correos empresariales</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Widget personalizados de contacto y atencion a clientes</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>PLUS</h4></div>
            <div className='prices-itemprice'><h3>$16,500</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Instalacion, configuracion y personalizacion</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Sin limite de paginas</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño web responsivo</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Desarrollo de Widget</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Creacion e instalacion de correos empresariales</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Widget personalizados de contacto y atencion a clientes</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

      </section>

      <div className='prices-titles'>
            <h3>PRECIOS</h3>
            <h4>Planes de Marketing Digital</h4>
        </div>
      <section className='prices-containeritem'>
          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>BASICO</h4></div>
            <div className='prices-itemprice'><h3>$4,000</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño de marcas para redes.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>3 publicaciones semanales en 2 redes sociales recomendadas.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Plan de accion semanal personalizado para cada red.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Post interactivos.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Reporte de resultado mensual.</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>AVANZADO</h4></div>
            <div className='prices-itemprice'><h3>$8,900</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseñode marca para redes.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>5 publicaciones semanales en 2 redes sociales recomendadas.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>1 video mensual de 15 seg.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Plan de accion semanal peronalizado para cada red.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Post interactivos.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Reporte de resultado mensual</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>PLUS</h4></div>
            <div className='prices-itemprice'><h3>$16,500</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño de marca para redes.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>30 publicaciones mensuales en redes sociales.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>2 videos mensuales de 15 seg.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Plan de accion semanal personalizado para cada red.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Post interactivos</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Reporte de resultado semanal</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

      </section>

      <div className='prices-titles'>
            <h3>PRECIOS</h3>
            <h4>Planes de Diseño</h4>
        </div>
      <section className='prices-containeritem'>
          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>BASICO</h4></div>
            <div className='prices-itemprice'><h3>$4,000</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño de marca para redes.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>3 publicaciones semanales en 2 redes sociales recomendadas.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Plan de accion semanal personalizado para cada red.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Post interactivos.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Reporte de resultados mensual.</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>AVANZADO</h4></div>
            <div className='prices-itemprice'><h3>$8,900</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño de marca para redes.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>5 publicaciones semanales en 2 redes sociales recomendadas.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>1 video mensual de 15 seg.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Plan de accion semanal personalizado para cada red.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Post interactivos</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Reporte de resultados mensual</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

          <div className='prices-item'>
            <div className='prices-itemtitle'><h4>PLUS</h4></div>
            <div className='prices-itemprice'><h3>$16,500</h3></div>
            <div className='Services-itemList'>
                    <span className='Services-itemSpan'><img src={plus} /><p>Diseño de marca para redes.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>30 publicaciones mensuales en redes sociales.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>2 videos mensuales de 15 seg.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Plan de accion semanal personalizado para cada red.</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Post interactivos</p></span>
                    <span className='Services-itemSpan'><img src={plus} /><p>Reporte de resultado mensual</p></span>
            </div>
            <div className='prices-itembtn'><button>CONTACT US</button></div>
          </div>

      </section>
    </div>
    </>
  )
}



export default Services