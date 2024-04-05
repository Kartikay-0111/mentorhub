import React, { useState } from 'react';
import './login.css'; // You need to have CSS styles in a separate file (App.css in this case)

function LoginApp() {
  const [isMentorSelected, setIsMentorSelected] = useState(false);
  const [isMenteeSelected, setIsMenteeSelected]=useState(true);

  const handleOptionClick = () => {
    // setIsMentorSelected(!isMentorSelected);
    // setIsMenteeSelected(isMenteeSelected);
    const mentee=document.getElementById("option1");
    const mentor=document.getElementById("option2");
    mentor.addEventListener("click", ()=>{
    document.getElementById("ment-img").src="./image2.jpg";
    document.getElementById("option1").style.backgroundColor="var(--bg-color)";
    document.getElementById("option2").style.backgroundColor="var(--primary-color)";
    });

    mentee.addEventListener("click", ()=>{document.getElementById("ment-img").src="./5437683.jpg";
    document.getElementById("option1").style.backgroundColor="var(--primary-color)";
    document.getElementById("option2").style.backgroundColor="var(--bg-color)";
    
    });
  };


  return (
    <div className="container">
      <div className="upper-container">
        <div className="option" id="option1" onClick={handleOptionClick}>
          <h2>Mentee</h2>
        </div>
        <div className="option" id="option2" onClick={handleOptionClick}>
          <h2>Mentor</h2>
        </div>
      </div>
      <div className="main">
        <form className="sign-in-form">
          <div className="sign-in-info">
            <img className="logo" src="./5437683.jpg" alt="Logo" />
            <h3>Sign in to get started</h3>
            <p>Start your journey to your dream job with mentors in the top 1% of the tech industry.</p>
          </div>
          <fieldset>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
            <div className="extra-options">
              <a href="#">Forgot Password?</a>
              <span>or</span>
              <a href="#">Sign Up</a>
            </div>
          </fieldset>
        </form>
        <div className="image-container">
          <img id="ment-img" src="5437683.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default LoginApp;
