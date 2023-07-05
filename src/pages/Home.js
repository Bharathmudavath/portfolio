import React from 'react'
import "../style/Home.css"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Html from "../assets/logo1.png"
import Css from "../assets/logo2.png"
import Javascript from "../assets/logo3.png"

import python from "../assets/python2.png"
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is BHARATH</h2>
        <div className="prompt">
          <p>I am a student of NITK with a passion for learning and creating.</p>
          
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h2> Skills</h2>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <div className='images'>
                <img src={Html} alt='html'/>
                <img src={Css} alt='Css'/>
                <img src={Javascript} alt='javascript'/>
                
            </div>
            
          </li>
          <li className="item">
            <h3>Machine learning</h3>
            <div className='images'>
                
                <img src={python} alt='python'/>
            </div>
          
          <li className="item">
            <h3>Languages  And  Skills</h3>
            <p>C++  DSA</p>
            <p>PYTHON  MACHINE LEARNING</p>
            
            <p>HTML  CSS  JAVASCRIPT  REACT </p>
          </li>
          
            
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home