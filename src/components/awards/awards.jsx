import React from 'react'
import './awards.css'
import Award from '../award/award'

const experience1 = {
    title: 'Best Paper Award',
    when: 'September 2021',
    location: 'International Conference on the Foundations of Digital Games',
    bullets: ['Awarded “Best Paper” to “Increasing player engagement, retention and performance through the inclusion\
    of educational content in a citizen science game”']
}

const data = [experience1]

const awards = () => {
  return (
    <section id='#awards'>
        <div className='awards_container'>
            <h2>Awards</h2>
            <div className="awards_list">
                {
                data.map((datum) => {
                    return <Award {...datum}/>
                })
                }
            </div>   
        </div>
    </section>
  )
}

export default awards