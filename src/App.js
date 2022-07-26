import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToUp from "./components/ScrollToUp";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Portafolio from "./routes/Portafolio";
import Services from "./routes/Services";
import WorkMedia from "./routes/WorkMedia";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="about" element={ <About/> }/>
          <Route path="portafolio" element={ <Portafolio/> }/>
          <Route path="services" element={ <Services/> }/>
          <Route path="workMedia" element={ <WorkMedia/> }/>
          <Route path="contact" element={ <Contact/> }/>
          <Route path="/" element={ <Home/> } exact />
        </Routes>
      </BrowserRouter>
        <Footer/>
        <ScrollToUp/>
    </div>
  );
}

export default App;
