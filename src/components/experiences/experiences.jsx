import React from 'react'
import './experiences.css'

import Experience from '../experience/experience'

const experience1 = {
  title: 'Intern',
  when: 'Summer 2020',
  location: 'Univeristy of Manitoba Bioinformatics Lab',
  bullets: ['Developer for a citizen science game in Unity called GeSort',
  'Fixed many bugs and maintained codebase',
  'Added features such as a progression system and an undo button',
  'Developer for a frontend for a research database and GeSort',
  'Allows research team to more easily analyze data',
  'Allows researchers to easily edit levels within GeSort',
  'Added users and security layer']
}
const experience2 = {
  title: 'Intern',
  when: 'Summer 2021',
  location: 'Univeristy of Manitoba Bioinformatics Lab',
  bullets: ['Co-authored a paper about the project presented at the International Conference on the\
    Foundations of Digital Games',
    'Won "Best Paper Award"',
    'Continued work on GeSort',
    'Shrunk build size to increase download times',
    'Created a version playable as a windows application',
    'Began development on a mobile version',
    'Worked on BOPAL 2, an algorithm for inferring ancestral gene orders of bacteria genomes',
    'Maintained and expanded upon a pipeline for fetching and parsing genomic data']
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
            <div className='experience_list_container'>
              <div className="experiences_list">
                {
                  data.map((datum) => {
                    return <Experience {...datum}/>
                  })
                }
              </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default experiences