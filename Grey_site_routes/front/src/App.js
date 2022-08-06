
import './App.css';
import Navigation from "./Components/Navigation";
import Masthead from "./Components/Masthead";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./Components/Error404";
function App() {
  return (
    <>
      <BrowserRouter>
          <Navigation/>
        <Routes>
            <Route path="/" exact element={<Masthead />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="*" exact element={<Error404 />} />
        </Routes>
      </BrowserRouter>

        <About/>
      <Projects/>
        <Signup/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
