import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Experiences from './components/experiences/Experiences'
import Awards from './components/awards/Awards'
import Footer from './components/footer/Footer'

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
