import"./MainImgStyle.css";

import React from 'react';
import IntroImg from "../assets/business-work-area.jpg";
// import { Link } from "react-router-dom";

const MainImg = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <h1>ADARSH RAJ SINHA</h1>
        <p> I'm A Full Stack Web Developer</p>
        <div className="read">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  )
}

export default MainImg;
