// src/App.jsx
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './styles/index.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
