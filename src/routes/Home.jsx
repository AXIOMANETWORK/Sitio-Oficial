import React from 'react'
import About from "../components/About";
import About2 from "../components/About2";
import Iconos from "../components/Iconos";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import TransforNow from "../components/TransforNow";
import WorkProcess from "../components/WorkProcess";
import Slider from '../components/Slider';
import Partners from '../components/Partners';
import oval from '../media/OvalBig.png';
import burbujas from '../media/burbujas1.png';
const Home = () => {
  return (
    <>
        <Slider/>
        <div className="container">
          <About/>
          <Services/>
          <About2/>
          <WorkProcess/>
          <Iconos/>
          {/*<Testimonials/>*/}
          <Partners/>
        </div>
        <TransforNow/>
        <div className='Home-ovalSlider'><img src={oval} alt="" /></div>
        <div className='Home-ovalBigAbout'><img src={oval} alt="" /></div>
        <div className='Home-ovalAbout'><img src={oval} alt="" /></div>
        <div className='Home-burbujasServices'><img src={burbujas} alt="" /></div>
        <div className='Home-burbujasProcess'><img src={burbujas} alt="" /></div>
    </>
  )
}

export default Home