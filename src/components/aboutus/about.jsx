import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

function About() {
  return (
    <div id="about">
      <div className="main_page">
        <div className="image_div">
          <img
            className="about_image"
            src="./pexels-vanessa-garcia-6325984.jpg"
            alt=""
          />
        </div>
        <div className="div2">
          <div className="about_content">
            <h5 className="text-secondary">About us</h5>
            <h1 className="text-primary">Book 1:1 Sessions</h1>
            <h4 className="text-info">
              Creative & Professional Digital Mentors!
            </h4>
            <small className="text-light">
              Schedule a session instantly with a mentor and work with them
              directly on Teetors - whether it’s for one-off tactical advice or
              multiple sessions towards a long-term goal. Schedule a session
              instantly with a mentor and work with them directly on Teetors -
              whether it’s for one-off tactical advice or multiple sessions
              towards a long-term goal.
            </small>
          </div>
          <div className="btn btn-outline-primary shadow mt-4">Explore</div>
        </div>
      </div>
    </div>
  );
}

export default About;