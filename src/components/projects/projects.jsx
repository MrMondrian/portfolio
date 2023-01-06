import React from 'react'
import './projects.css'
import Project, {ProjectVideo} from '../project/project'
import '../project/project.css'

import GeSortPicture from '../../assets/GeSort2.png'
import ArcadePicture from '../../assets/Arcade.png'
import ArcadeVideo from '../../assets/ArcadeVideo.mp4'
import GeneticVideo from '../../assets/Genetic.mp4'
import GeneticPicture from '../../assets/Genetic_Moment.png'
import AUVPicture from '../../assets/auv.png'
import XrayPicture from '../../assets/xray.jpeg'

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
  buttons: [{text: 'Source Code', link:'https://github.com/MrMondrian/Arcade-Shooter-Game'}]
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


const project4 = {
  title: 'Autonomous Underwater Vehicle',
  picture: AUVPicture,
  info: 'The AUV is a project I\'ve had the pleasure of working on as part of the McGill robotics team. \
  This robot is deisgned to compete in the AUVSI RoboSub Competition where competing robots must perform a variety of tasks\
  underwater fully autonomously. My role in this project as a software developer is writing code for the robot, mostly in form of ROS packages,\
  and integrating hardware provided by our electrical team into the AUV\'s software systems.',
  buttons: [{text: 'Source code', link:'https://github.com/mcgill-robotics/AUV-2023'},
  {text: 'McGill Robotics website', link: 'https://www.mcgillrobotics.org/'}]
}

const project5 = {
  title: 'X-ray Image Classifier',
  picture: XrayPicture,
  info: 'The X-ray Image Classifier is a project I made to classify chest x-ray images as either normal or pneumoia. It uses a convolutional neural network\
  I designed and implemented in tensorflow. I was insprired to do this project after taking a graduate level course in machine learning. \
  I really enjoyed the course and wanted to apply my the knowledge I obtained on an interesting project.\
  I chose to make an x-ray image classifier for two reasons. Firstly, I wanted to get more hands on experience with convolution as I find\
  it super cool, and didn\'t feel that the course I took was enough to confidently design CNNs. After working on the project I\'m much more\
  more confident with CNNs. Secondly, my dad is a doctor who works with chest x-ray images, and thought it would be nice to do a project he could relate to.',
  buttons: [{text: 'Source code', link:'https://github.com/MrMondrian/xray-classifier'},
  {text: 'The dataset', link:'https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia/code?datasetId=17810&sortBy=voteCount'}]

}

const tags = [<Project {...project4}/>,<Project {...project1}/>, <Project {...project5}/>,<ProjectVideo {...project2}/>, <ProjectVideo {...project3}/>]

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