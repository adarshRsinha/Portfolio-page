import "./FormStyle.css";

import React from 'react'

const Form = () => {
  const emailAddress = 'sinhaadarsh929@gmail.com';
  return (
    <div className="form">
      <form>
        {/* <label>Name:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="text"></input>
        <label>Subject:</label>
        <input type="text"></input>
        <label>Message:</label>
        <textarea rows="6" placeholder="Type Your Message Here..."/>
        <button className="btn">SUBMIT</button> */}
         <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.
         
      </form>
    </div>
  )
}

export default Form
