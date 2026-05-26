import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useState,useEffect} from 'react'
import Footer from "./components/Footer";
import ScrollToUp from "./components/ScrollToUp";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Portafolio from "./routes/Portafolio";
import Services from "./routes/Services";
import WorkMedia from "./routes/WorkMedia";
import GridLoader from 'react-spinners/GridLoader'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [])

  return (
    <div className="App">
      {
        loading ?
        <div className='Snipper'>
          <GridLoader color={"rgba(241,165,1)"} size={50} />
        </div>
        :
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/about" element={ <About/> }/>
          <Route path="/portafolio" element={ <Portafolio/> }/>
          <Route path="/services" element={ <Services/> }/>
          <Route path="/workMedia" element={ <WorkMedia/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/" element={ <Home/> } exact />
        </Routes>
       </BrowserRouter>
        <Footer/>
        <ScrollToUp/>
      </>
      }
      
    </div>
  );
}

export default App;
