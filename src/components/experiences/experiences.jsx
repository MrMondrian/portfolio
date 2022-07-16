import React from 'react'
import './experiences.css'

import Experience from '../experience/experience'

const experience1 = {
  title: 'Intern',
  when: 'Summer 2020',
  location: 'Univeristy of Manitoba Bioinformatics Lab',
  bullets: ['Developed a citizen science game in Unity',
   'Created a frontend for a research database']
}
const experience2 = {
  title: 'Intern',
  when: 'Summer 2020',
  location: 'Univeristy of Manitoba Bioinformatics Lab',
  bullets: ['Developed a citizen science game in Unity',
   'Created a frontend for a research database']
}
const experience3 = {
  title: 'Intern',
  when: 'Summer 2020',
  location: 'Univeristy of Manitoba Bioinformatics Lab',
  bullets: ['Developed a citizen science game in Unity',
   'Created a frontend for a research database']
}

const data = [experience1,experience2,experience3]

const experiences = () => {
  return (
    <section id='experiences'>
        <div className='experiences_container'>
            <h2>Experience</h2>
            <div className="experiences_list">
              {
                data.map((datum) => {
                  return <Experience {...datum}/>
                })
              }
            </div>
            
        </div>
        
    </section>
  )
}

export default experiences