// import logo from './logo.svg';

// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (

    
    <body className='bg-primary overflow-hidden bg-gradient-to-l from-primary to-fade '>  
      <Navbar></Navbar>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </body>
  );
}

export default App;
