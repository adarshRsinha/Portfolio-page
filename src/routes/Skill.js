import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MainImg2 from '../Components/MainImg2';
import MySkill from '../Components/MySkill';

const Skill = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="SKILLS" text="Some abilities to perform tasks" />
      <MySkill/>
      <Footer/>
    </div>
  )
}

export default Skill;
