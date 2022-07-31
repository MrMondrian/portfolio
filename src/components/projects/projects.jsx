import React from 'react'
import './projects.css'
import Project, {ProjectVideo} from '../project/project'
import '../project/project.css'

import GeSortPicture from '../../assets/GeSort2.png'
import ArcadePicture from '../../assets/Arcade.png'
import ArcadeVideo from '../../assets/ArcadeVideo.mp4'

const project1 = {
  title: 'GeSort',
  picture: GeSortPicture,
  info: 'GeSort is a citizen science game made to help solve the genome sorting problem. It was developed at the University of Manitoba\
  Bioinformatics lab. I worked on this project under the supervision of Dr. Tremblay-Savard during my interships at his lab summer 2020 and 2021.',
  buttons: [{text: 'Try it yourself', link:'https://gesort.cs.umanitoba.ca:9001/'}]
}

const project2 = {
  title: 'Arcade Shooter Game',
  video: ArcadeVideo,
  info: 'This is an arcade style shooter I built in java that features a mix of 2d and 3d graphics. I built it using the processing library \
  which runs on top of OpenGL. To create this project, I utilized various types of animation such as sinusodial interpolation, particle systems, \
  colision checking, texture mapping and more.',
  buttons: [{text: 'Source Code', link:'https://github.com/MrMondrian/Comp-3490-assignment-3'}]
}

const tags = [<Project {...project1}/>, <ProjectVideo {...project2}/>]

const projects = () => {
  return (
    <section id='projects'>
        <div className='projects_container'>
            <h2>Projects</h2>
            <div className="projects_list">
              {tags} 
            </div>
            
        </div>
        
    </section>
  )
}

export default projects