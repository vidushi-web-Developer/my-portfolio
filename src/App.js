import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About"
import Main from "./Components/Main";
import Service from './Components/Service';
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import Greeting from './Components/Greeting';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/greeting' element={<Greeting />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
