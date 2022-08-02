import "./FooterStyle.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/> </h4>
                    <div>
                        <p>Sector 3/A, Tilak Nagar</p>
                        <p>Indore, India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                +91 9407235XXX </h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                info@gmail.com </h4>
                
                </div>
            </div>
            <div className="right">
            <h4>About the company</h4>
            <p>This is me Adarsh Raj Sinha and I'm a Student of MediCaps University. I enjoy discussing the new projects and design challenges.</p>
            <div className="social-media">
            <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem" }}/>
            <FaInstagram size={20} style={{color:"#fff", marginRight: "2rem" }}/>
            <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem" }}/>
            <FaGithub size={20} style={{color:"#fff", marginRight: "2rem" }}/>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
