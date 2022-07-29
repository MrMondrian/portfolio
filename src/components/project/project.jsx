import React from 'react'
import './project.css'


const project = ({title, info, picture,buttons}) => {

  const the_buttons = []
  buttons.forEach((bt) => {
    the_buttons.push(<a className='btn'>{bt.text}</a>)
  })
  return (
    <article>
        <div className='project_container'>
            <h3>{title}</h3>
            <div className='project_content'>
                <img className='project_img' src={picture}></img>
                <div className='project_info'>
                    <p className='project_info_text'>{info}</p>
                    <div className='project_buttons'>
                        {the_buttons}
                    </div>
                </div>
                
            </div>
        </div>
    </article>
  )
}

export default project