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
  title: 'Tutor',
  when: 'January 2022 -',
  location: 'McGill University',
  bullets: ['Independently tutored University Students in Math and Computer Science',
  'Ex: Honours Algorithms and Data Structures, Programming Langauges and Paradigms, Introduction to Computer Science']
}

const experience4 = {
  title: 'Code Sensei',
  when: 'Summer 2022',
  location: 'Code Ninjas Winnipeg',
  bullets: ['Taught coding skills to kids',
  'Helped kids with coding projects',
  'Created Minecraft mods designed to entertain kids',
  'Watched 25 kids, ensured they were having fun and safe']
}

const data = [experience2,experience1,experience4,experience3]

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