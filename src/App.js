import Nav from './components/nav/nav'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Experiences from './components/experiences/experiences'
import Awards from './components/awards/awards'
import Footer from './components/footer/footer'

import {useEffect} from 'react'


function App() {
  useEffect(() => {
    document.title = 'Anthony Tan';
  })
  return (
    <>
      <Nav/>
      <About/>
      <Projects/>
      <Experiences/>
      <Awards/>
      <Contact/>
      <Footer/>
   </>
  
  )
}

export default App;
