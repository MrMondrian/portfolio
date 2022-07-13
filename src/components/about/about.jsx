import React from 'react'
import './about.css'
import resume from '../../assets/AnthonyTanResume.pdf'

const about = () => {
  return (
    <section id='about'>
        <div className="about_container">
            <h1>Hi I'm Anthony</h1>
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