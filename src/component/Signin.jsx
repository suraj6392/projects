import React from "react";
import email_icon from "./Assets/Email.png";
import user_icon from "./Assets/User.png";
import password_icon from "./Assets/Password.png";
import School_icon from "./Assets/School.png";
import Degree_icon from "./Assets/Degree.png";
import Call_icon from "./Assets/Call.png";
import "./Signin.css"
function Signin1() {
  return (
    <div className="container1">
      <div className="header">
        <div className="text">Sign in</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="emailt" placeholder="Email id"/>
        </div>
        
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="New Password" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="input">
          <img  className="logo-src"  src={Call_icon} alt="" />
          <input type="Number" placeholder="Mobile No" />
        </div>
        <div className="input">
          <img  className="logo-src"  src={Degree_icon} alt="" />
          <input type="Text" placeholder="Grade" />
        </div>
      <div className="input">
        <img className="logo-src" src={School_icon} alt=""  />
          <input type="Text" placeholder="School Name" />
        </div>
        <div className="input">
          <img  className="logo-src"  src={School_icon} alt="" />
          <input type="Text" placeholder="College Name" />
        </div>
        </div>
      <div className="submit-container">
        <div className="submit">Sign in</div>
      </div>
    </div>
    
  );
}

export default Signin1;
