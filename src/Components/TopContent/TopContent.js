import React from 'react'
import {Link} from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
            <h1>Vithiya Sivapalan</h1>
            <p>Software Engineer</p>
            <a href='www.google.com'>
                <button className='topContent_downloadButton'> Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent_workButton'>myWork</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent
