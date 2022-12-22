import React from 'react'
import './experience.css'

const Experience = ({title,when,location,bullets}) => {
  return (
    <article>
        <div className='experience_container'>
            <h3 className='experience_first_header'>{location} <span>{when}</span></h3>
            <h3 className='experience_second_header'>{title}</h3>
            <div className='experience_content'>
                <ul>
                    {bullets.map((bullet) => {
                        return <li>{bullet}</li>
                    })}
                </ul>
            </div>
        </div>
    </article>
  )
}

export default Experience