import React from 'react'
import {Element} from 'react-scroll'
import {IconButton} from "@material-ui/core"
import {GitHub, LinkedIn } from "@material-ui/icons"
import './Contact.css'
const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email : <span>i.vithiya@gmail.com</span>
            </p>
            <p>
                Github UserName : <span>@vithiya</span>
            </p>
            <div className='contact_icons'>
                <a href="google.com">
                    <IconButton>
                        < LinkedIn onClick={() => window.open('https://linkedin.com/in/sivapalan-vithiya-237a5726')} />
                        < GitHub onClick={() => window.open('https://github.com/vithiya')}/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
