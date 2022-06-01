import About from "./components/About";
import About2 from "./components/About2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Iconos from "./components/Iconos";
import OurWork from "./components/OurWork";
import Rectangles from "./components/Rectangles";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TransforNow from "./components/TransforNow";
import WorkProcess from "./components/WorkProcess";


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
          <About/>
          <Services/>
          <About2/>
          <OurWork/>
          <WorkProcess/>
          <Iconos/>
          <Testimonials/>
          <Rectangles/>
        </div>
        <TransforNow/>
        <Footer/>
    </div>
  );
}

export default App;
