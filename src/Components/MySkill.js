import "./MySkillStyle.css";
import React from 'react';
import CssImg from "../assets/css3-logo-png-transparent.png";
import JavaScriptImg from "../assets/JavaScript_Logo.png";
import ReactImg from "../assets/logo512.png";
import NodeImg from "../assets/nodejs-logo.png";
import SqlImg from "../assets/sql-server-logo-3.png";

const MySkill = () => {
  return (
    <div className="contains">
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img className="skill-icon" src="https://th.bing.com/th/id/R.6c8f0a0e377cfa70efcd35ff52893b17?rik=FKsQ4nj%2fmh%2bcrg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2017%2f07%2fHTML5_badge.png&ehk=eak5i9vdmnxBR1x2ccnzAOPmmvZw5%2bZIl9tQwHV9aQA%3d&risl=&pid=ImgRaw&r=0" alt="HTML 5" />
                </div>
                <h3>HTML 5</h3>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p> 
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img className="skill-icon" src={CssImg} alt="CSS 3" />
                </div>
                <h3>CSS</h3>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p> 
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img className="skill-icon" src={JavaScriptImg} alt="JavaScript" />
                </div>
                <h3>JavaScript</h3>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p> 
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img className="skill-icon" src={ReactImg} alt="React.js" />
                </div>
                <h3>React.js</h3>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p> 
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img className="skill-icon" src={NodeImg} alt="Node.js" />
                </div>
                <h3>Node.js</h3>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p> 
        </div>
        <div className="skill-box">
            <div className="skill-title">
                <div className="img">
                    <img className="skill-icon" src={SqlImg} alt="SQL" />
                </div>
                <h3>MY SQL</h3>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p> 
        </div>
    </div>
  )
}

export default MySkill;
