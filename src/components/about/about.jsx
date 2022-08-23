import React from 'react'
import './about.css'
import resume from '../../assets/AnthonyTanResume.pdf'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {DiPython} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {SiCplusplus} from 'react-icons/si'
import {DiHtml5} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {SiOcaml} from 'react-icons/si'
import {DiUnitySmall} from 'react-icons/di'


const about = () => {
  return (
    <section id='about'>
        <div className="about_container">
            <h1>Hi I'm Anthony</h1>
            <div className='socials'>
              <a href='https://github.com/MrMondrian' target='_blank'><FaGithub size={23}/></a>
              <a href='https://www.linkedin.com/in/anthony-tan-29a868203/' target='_blank'><BsLinkedin size={23}/></a>
            </div>
            <div className="skills">
              <DiPython/>
              <DiJava/>
              <DiUnitySmall/>
              <DiJavascript1/>
              <SiCplusplus/>
              <DiHtml5/>
              <DiCss3/>
              <DiReact/>
              <SiOcaml/>
            </div>

            <p className='about_text'>I'm a fourth year computer science student at McGill.
                Here you can find some projects I've worked on, my resume,
                and other stuff.
            </p>
            <div className='about_btns'>
                <a href={resume} target='_blank' className='btn about_btn'>My Resume</a>
                <a href='https://dl.acm.org/doi/10.1145/3472538.3472554' target='_blank' className='btn about_btn'>A paper I worked on</a>
                <a href='#contact' className='btn about_btn'>Want to get in touch?</a>
            </div>
            
        </div>
    </section>
  )
}

export default about