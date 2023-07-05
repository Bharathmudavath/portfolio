import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Education from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/portfolio' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/experience' element={<Education/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
