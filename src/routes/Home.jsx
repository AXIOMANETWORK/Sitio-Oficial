import React from 'react'
import About from "../components/About";
import About2 from "../components/About2";
import Iconos from "../components/Iconos";
import OurWork from "../components/OurWork";
import Rectangles from "../components/Rectangles";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import TransforNow from "../components/TransforNow";
import WorkProcess from "../components/WorkProcess";
import Slider from '../components/Slider';
import Partners from '../components/Partners';

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
          <Testimonials/>
          <Partners/>
        </div>
        <TransforNow/>
    </>
  )
}

export default Home