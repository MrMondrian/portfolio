import React from 'react'
import './award.css'

const Award = ({title,when,location,bullets, index}) => {
    return (
      <article>
          <div className='award_container'>
              <h3 className='award_first_header'>{title} <span>{when}</span></h3>
              <h3 className='award_second_header'>{location}</h3>
              <div className='award_content'>
                  <ul>
                      {bullets.map((bullet) => {
                          return <li key='index'>{bullet}</li>
                      })}
                  </ul>
              </div>
          </div>
      </article>
    )
}

export default Award