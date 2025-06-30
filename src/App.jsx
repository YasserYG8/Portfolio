import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NaviBar.jsx'
import { Banner } from './components/Banner.jsx';
import { Skills } from './components/Skills.jsx';
import { Project } from './components/Project.jsx';
import { Footer } from './components/Footer.jsx';
import { Contact } from './components/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
