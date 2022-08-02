import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MainImg2 from '../Components/MainImg2';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="CONTACT" text="To have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;
