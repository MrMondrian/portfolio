import React from 'react'
import './projects.css'
import Project, {ProjectVideo} from '../project/Project'
import '../project/project.css'

import GeSortPicture from '../../assets/GeSort2.png'
import ArcadePicture from '../../assets/Arcade.png'
import ArcadeVideo from '../../assets/ArcadeVideo.mp4'
import GeneticVideo from '../../assets/Genetic.mp4'
import GeneticPicture from '../../assets/Genetic_Moment.png'

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
  image: ArcadePicture,
  info: 'This is an arcade-style shooter I built in java that features a mix of 2D and 3D graphics. I built it using the processing library \
  which runs on top of OpenGL. To create this project, I utilized various types of animation such as sinusodial interpolation, particle systems, \
  collision checking, texture mapping and more.',
  buttons: [{text: 'Source Code', link:'https://github.com/MrMondrian/Comp-3490-assignment-3'}]
}

const project3 = {
  title: 'Genetic Algorithm Word Guesser',
  video: GeneticVideo,
  image: GeneticPicture,
  info: 'This is a python script I wrote (with help from a professor) that uses a genetic algorithm to guess a word given by the user. \
  It works by first generating 10000 random strings and measuring how close they all are. The ones with below average closeness are discarded \
  and the rest are "crossbred" to create the strings that are closer than the previous generation. This is repeated until one of the words is \
  correct.',
  buttons: [{text: 'Source Code', link:'https://github.com/MrMondrian/GeneticWordGuesser'}]
}

const tags = [<Project {...project1}/>, <ProjectVideo {...project2}/>, <ProjectVideo {...project3}/>]

const Projects = () => {
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

export default Projects