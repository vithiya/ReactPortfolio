import React from 'react'
import { Element } from 'react-scroll';
import skills from "../../Assets/skills.jpg"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id="skills">
        <div className='skillContainer_img'>
            <img src={skills} alt="" />
        </div>
        <div className='skillContainer_text'>
            <h2>Technologies</h2>
            <div className='skillContainer_skillSet'>
                <h5>React</h5>
                <div className='skillContainer_slider skillContainer_slider1'>
                    <LinearProgress variant="determinate" value={60} />
                </div>
            </div>
            <div className='skillContainer_skillSet'>
                <h5>JavaScript</h5>
                <div className='skillContainer_slider skillContainer_slider2'>
                    <LinearProgress variant="determinate" value={85} />
                </div>
            </div>
            <div className='skillContainer_skillSet'>
                <h5>Java</h5>
                <div className='skillContainer_slider skillContainer_slider3'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
            </div>
            <div className='skillContainer_skillSet'>
                <h5>MySQL</h5>
                <div className='skillContainer_slider skillContainer_slider4'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
            </div>
            <div className='skillContainer_skillSet'>
                <h5>Git</h5>
                <div className='skillContainer_slider skillContainer_slider5'>
                    <LinearProgress variant="determinate" value={75} />
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer
