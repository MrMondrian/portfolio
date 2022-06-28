import React from 'react'
import './projects.css'
import Project from '../project/project'

import GeSortPicture from '../../assets/GeSort2.png'

const data = {
  title: 'GeSort',
  picture: GeSortPicture,
  info: 'GeSort is a citizen science game made to help solve the genome sorting problem. It was developed at the University of Manitoba\
  Bioinformatics lab. I worked on this project under the supervision of Dr. Tremblay-Savard during my interships at his lab summer 2020 and 2021.'
}

const projects = () => {
  return (
    <section>
        <div className='projects_container'>
            <h2>Projects</h2>
            <div className="projects_list">
              <Project {...data}/>
            </div>
            
        </div>
        
    </section>
  )
}

export default projects