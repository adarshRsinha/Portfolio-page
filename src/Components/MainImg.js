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
        <h3> I turn ideas into reality</h3>
        <div className="read">
      <p>I'm a software developer and coder based in India and having a knack for creating highly scalable and distributed systems.</p>
        </div>
      </div>
    </div>
  )
}

export default MainImg;
