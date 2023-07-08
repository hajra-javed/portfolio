import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Projects from './components/Projects/Projects';
// import 
// import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
