import React from 'react'
import{Element} from 'react-scroll';
import Project from '../projects/Project';
import skills from "../../Assets/skills.png"
import './ProjectContainer.css'

const ProjectContainer = () => {

  const projects =[
    {
        img:skills,
        title: "ReactPortfolio",
        desc: "Project description",
        link: "www.google.com",
    },
    {
        img: skills,
        title: "Node js",
        desc: "Node js project",
        link: "www.google.com",
    },
    {
        img: skills,
        title: "React ToDo List",
        desc: "React Todo project",
        link: "www.google.com",
    },
    {
        img: skills,
        title: "Ecommerce app",
        desc: "Ecommerce app description",
        link: "www.google.com",
    },
    {
        img: skills,
        title: "event management",
        desc: "event management app",
        link: "www.google.com",
    },
    {
        img: skills,
        title: "css projects",
        desc: "Project description css project",
        link: "www.google.com",
    },
  ] 
  return (
    <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>Here are some projects I have done</p>
        <div className='projectContainer_projects'>
            {
              projects.map((project,index)=>{
                return (
                    <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
                )
              })  
            }
        </div>
    </Element>
  )
}

export default ProjectContainer
