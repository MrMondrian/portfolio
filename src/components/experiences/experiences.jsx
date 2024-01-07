import React from 'react'
import './experiences.css'

import Experience from '../experience/experience'

const experience2 = {
  title: 'Software Development Intern',
  when: 'May 2020 - August 2020 & May 2021 - August 2021',
  location: 'University of Manitoba Bioinformatics Lab',
  bullets: ['Developed a citizen science game in Unity for solving bioinformatics problems',
    'Shrunk build size to improve download times',
    'Created a version playable as a windows application',
    'Began development on a mobile version',
    'Created security for a server containing experiment data using Bcrypt and JsonWebToken',
    'Designed and developed a frontend for the server for easy data visualization',
    'Used MongoDB to maintain a backend for the server',
    'Worked on BOPAL 2, an algorithm for inferring ancestral gene orders of bacteria genomes',
    'Expanded upon a pipeline for fetching and parsing genomic data with BioPython',
    'Co-authored 2 papers, one of which was presented at the International Conference on the Foundations of Digital\
    Games. Won “Best Paper Award”']
}
const experience3 = {
  title: 'Tutor',
  when: 'January 2022 - September 2022',
  location: 'McGill University',
  bullets: ['Independently tutored University Students in Math and Computer Science',
  'Ex: Honours Algorithms and Data Structures, Programming Langauges and Paradigms, Introduction to Computer Science']
}

const experience4 = {
  title: 'Code Sensei',
  when: 'May 2022 - August 2022',
  location: 'Code Ninjas Winnipeg',
  bullets: ['Taught coding skills to kids',
  'Helped kids with coding projects',
  'Created Minecraft mods designed to entertain kids',
  'Watched 25 kids, ensured they were having fun and being safe']
}

const experience5 = {
  title: 'Team Lead',
  when: 'September 2022 - Present',
  location: 'McGill Robotics Team',
  bullets: ['Wrote software for an autonomous underwater vehicle (AUV) for control systems, navigation, state \
  estimation, computer vision, mission planning, mapping, and simulation.',
  'Created extensive documentation and an automatic integration testing pipeline',
  'Dockerized the project and deployed containers to remote servers for robotics simulations.',
  'Taught robotics skills to new members and organized tasks in accordance with Agile.']
}

const experience6 = {
  title: 'Software Development Intern',
  when: 'May 2023 - August 2023',
  location: 'Distributed Digital Music Archives & Libraries Lab',
  bullets: ['Developed software for automatic music recognition with Tensorflow/OpenCV']
}

const experience7 = {
  title: 'Software Development Intern',
  when: 'September 2023 - December 2023',
  location: 'Transport Canada',
  bullets: ['Implemented an alert system on multiple .NET applications.']

}

const data = [experience5,experience7,experience6,experience4,experience3,experience2]

const Experiences = () => {
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

export default Experiences