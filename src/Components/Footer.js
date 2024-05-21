import React from 'react'
import './Footer.css';

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className='top'>
                <div className="brand">
                    <h2>DevConnect</h2>
                    <p>A platform that connects student developers for collaboration and hackathon participation.</p>
                    <div className="socials">
                        <h4>My Socials</h4>
                    <div className="social">
                        <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/Ph0enix28">
                        <div className="social">
                            <i class="fi fi-brands-facebook"></i>
                            <p>Facebook</p>
                            </div>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/__phoe.nix/">
                            <div className="social">
                            <i class="fi fi-brands-instagram"></i>
                            <p>Instagram</p>
                        </div>
                        </a>
                    </div>
                        <div className="email">

                        </div>
                        <div className="whatsapp">

                        </div>
                    </div>
                </div>
                <div className="links">
                <ul className='socials'>
                        <h4>Connect With Me</h4>
                        
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Sudip-khadka">
                            <div className="social">
                            <i class="fi fi-brands-github"></i>
                            <p>Github</p>
                            </div>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/sudip-khadka-21a769251/">
                        <div className="social">
                            <i class="fi fi-brands-linkedin"></i>
                            <p>LinkedIn</p>
                            </div>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/SudipKhadk3112">
                        <div className="social">
                            <i class="fi fi-brands-twitter"></i>
                            <p>Twitter</p>
                            </div>
                        </a>
                    </ul>
                    <ul>
                        <h4>Quick Links</h4>
                        <li>Community</li>
                        <li>Contests</li>
                        <li>Discussions</li>
                        <li>Profile</li>
                    </ul>
                    <ul>
                        <h4>My Other Projects</h4>
                        <li>Sales Sprout -Ecommerce Site</li>
                        <li>LearnVista -Online Learning Platform </li>
                        <li>FlavorFlow -Recipe Sharing Application </li>
                        <li>EventEra -Event Management System </li>
                    </ul>
                   
                </div>
            </div>
            <div className="author">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>
               <p>Developed & Maintained By Sudip Khadka</p>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
</svg>
            </div>
        </div>
    )
}

export default Footer;