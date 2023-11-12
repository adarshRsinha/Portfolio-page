import "./FooterStyle.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    const linkedinProfileUrl = 'https://www.linkedin.com/in/adarsh-raj-sinha-88677b224';
    const githubProfileUrl = 'https://github.com/adarshRsinha';
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    {/* <h4><FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/> </h4>
                    <div>
                        <p>Sector 3/A, Tilak Nagar</p>
                        <p>Indore, India</p>
                    </div> */}
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                +91-9425032541 </h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                sinhaadarsh929@gmail.com </h4>
                
                </div>
            </div>
            <div className="right">
            <h4>About the company</h4>
            <p>This is me Adarsh Raj Sinha and I'm a Student of MediCaps University. I enjoy discussing the new projects and design challenges.</p>
            <div className="social-media">
            {/* <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem" }}/> */}
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">        
            <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem" }}/>
            </a>
            <FaInstagram size={20} style={{color:"#fff", marginRight: "2rem" }}/>
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">                    
            <FaGithub size={20} style={{color:"#fff", marginRight: "2rem" }}/>
            </a>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
