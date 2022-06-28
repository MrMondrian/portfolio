import React from 'react'
import './about.css'

const about = () => {
  return (
    <section>
        <div className="about_container">
            <h1>Hi I'm Anthony</h1>
            <p className='about_text'>I'm a fourth year computer science student at McGill.
                Here you can find some projects I've worked on, my resume,
                and other stuff.
            </p>
            <div className='about_btns'>
                <button className='btn about_btn'>My Resume</button>
                <button className='btn about_btn'>Want to get in touch?</button>
            </div>
            
        </div>
    </section>
  )
}

export default about