import React from 'react'
import Github from './Pagemediafiles/GithubIcon.png'
import Slack from './Pagemediafiles/slack.png'
import inked from './Pagemediafiles/coloredLink.png'
import './index.css'

function Footer() {
  return (
    <footer id="footer">
        <p id="footer-text">Andile Nqabelele 2023 Portfolio®</p>

        <div className='footer-icons'>
        <a href='https://github.com/Andile-Nqabelele'><img src={ Github } alt="github icon" className='footer-icon github' /></a>
        <a href='https://frontendmentor.slack.com/archives/D04GNAASK4L'><img src={ Slack } alt="slack icon" className='footer-icon slack' /></a>
        <a href='/#'><img src={ inked } alt="linked in icon" className='footer-icon linkedIn' /></a>
        </div>
    </footer>
  )
}

export default Footer;