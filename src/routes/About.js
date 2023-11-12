import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MainImg2 from '../Components/MainImg2';
import AboutType from '../Components/AboutType';

const About = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="ABOUT" text="I'm a Software Developer" />
      <AboutType/>
      <Footer/>
    </div>
  )
}

export default About;
