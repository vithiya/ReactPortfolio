import React from 'react'
import {Element} from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer_info'>
            <Experience number="1.3" title="Embla" />
            <Experience number="1" title="eBuilder" />
            <Experience number="4.5" title="Mazarin" style={{backgroundColor:"#f64c08"}} />
            <Experience number="2.5" title="NWSDB" />
        </div>
    </Element>
  )
}

export default ExperienceContainer
