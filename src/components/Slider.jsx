import React,{useState,useRef,useEffect} from 'react';
import Nav from './Nav';
import SlidePerson from '../media/personDesktop.png';
import Rectangle from '../media/Rectangle.png';
import Cuadricula from '../media/cuadricula.png';
import iconFacebook from '../media/iconFacebookWithe.png';
import iconTwitter from '../media/iconTwitterWithe.png';
import iconInstagram from '../media/iconInstagramWithe.png';

const Slider = () => {
   const slideContainer = useRef(null)
   const slide = useRef(null)
   const [contador,setContador] = useState(1)
   
   
   useEffect(() => {
       setTimeout( () => {
            let suma = contador + 1
            if (suma > 3 ) {
                setContador(1)
            }else {
                setContador(suma)
            }
        },3000)
        
        return () => {
            carrusell()
        }
   }, [contador])
   

    const carrusell = ()=>{
        const slideWidth = slide.current.offsetWidth;
        let valor = contador * slideWidth
        let valorMax = slideWidth * 3;
        if ( valor >= valorMax) {
            valor = 0
        }else {
            valor = -1 * valor
        }
          
         slideContainer.current.style.transform = `translate(${valor}px)`;
         
         //console.log(slideContainer.current.children[0]);
    }

  return (
    <>
        <div className="Slider">
            <div className='Slider-navegacion'>
                <div className="Slider-logo"></div>
                <Nav/>
            </div>
            <div className='Slider-slide'>
                <div className="Slider-slides">
                <div className="Slider-containerText" ref={slideContainer}>
                    <div className='Slider-texto' ref={slide}>
                        <h3 className='Slider-h3'>Tecnología & Outsourcing</h3>
                        <p className='text-bold Slider-pTitle'>Expertos en soluciones TIC para empresas</p>
                        <p className='text-content Slider-p'>Contamos con 10 años en el mercado ofreciendo soluciones tecnológicas para PYME de diversos sectores: Turismo, Telecomunicaciones, Retail y Viajes entre otras.</p>
                    </div>
                    <div className='Slider-texto'>
                        <h3 className='Slider-h3'>Marketing DIGITAL</h3>
                        <p className='text-bold Slider-pTitle'>Armamos una estrategia para potenciar tu marca</p>
                        <p className='text-content Slider-p'>Impulsamos tu producto o servicio con estrategias de marketing online orientadas a la captación de consumidores. </p>
                    </div>
                    <div className='Slider-texto'>
                        <h3 className='Slider-h3'>Desarrollo</h3>
                        <p className='text-bold Slider-pTitle'>Sitios web,app móviles y software a la medida</p>
                        <p className='text-content Slider-p'>Nuestros desarrollos son escalables, robustas y fáciles de usar y trabajamos solo con las principales tecnologías de acuerdo a las necesidades de cada proyecto.</p>
                    </div>
                </div>
                </div>
                <div className='Slider-imgPerson'>
                    <img src={SlidePerson} alt="" />    
                </div>
                <div className='Slider-social'>
                    <div className="Slider-iconSocial"><img src={iconFacebook} alt="" /></div>
                    <div className="Slider-iconSocial"><img src={iconTwitter} alt="" /></div>
                    <div className="Slider-iconSocial"><img src={iconInstagram} alt="" /></div>
                </div>
            </div>
            <div className='Slider-cuadricula'><img src={Cuadricula} alt="" /></div>
            <div className='Slider-figura'><img src={Rectangle} alt="" /></div>
        </div>
    </>
  )
}

export default Slider