import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/about' element={<About />} />
          <Route path='/portfolio/portfolio' element={<Projects />} />
          <Route path='/portfolio/contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
