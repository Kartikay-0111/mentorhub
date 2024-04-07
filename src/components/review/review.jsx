import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./review.css";
function Review() {
  return (
    <div>
      <div className="maindiv">
        <img className="review_bg_img" src="./review_bg.png" alt="" />
        <div className="textdiv text-center mb-5">
          <h5 className="text-secondary">Our testimonials</h5>
          <h1 className="text-warning">Wins from all around the globe</h1>
        </div>
        <div className="carddiv row gap-5 justify-content-center">
          <div style={{backgroundColor:"transparent"}} className="card col-9 shadow-lg p-3 text-light col-md-5 col-sm-5 col-lg-3 col-xlg-2 ">
            <h3>Satyam Agarwal</h3>
            <h5>08-03-2024</h5>
            <h6>
            The session was very inspiring, and I gained a lot of insight into the silly mistakes I have been making when sitting for job interviews. Abhishek sir also helped me with a mock interview on a new product launch with tips at the end on how I could have done better. Overall, it was a great session and an opportunity for me to improve significantly.
            </h6>
          </div>
          <div style={{backgroundColor:"transparent"}} className="card col-9 shadow-lg p-3 text-light col-md-4 col-sm-5 col-lg-3 col-xlg-2 ">
            <h3>Trisha Parekh</h3>
            <h5>02-02-2024</h5>
            <h6>
            One of the best consulting sessions I ever had! Thank you, Rishika, for covering all my queries in a very well-structured manner, I truly loved the way you were patiently listening to all of my doubts, and covering all of them step by step with your personal experiences
            </h6>
          </div>
          <div style={{backgroundColor:"transparent"}} className="card col-9 shadow-lg p-3 text-light col-md-4 col-sm-5 col-lg-3 col-xlg-2 ">
            <h3>Dhruv</h3>
            <h5>01-05-2023</h5>
            <h6>
            I highly recommend your mentorship services to anyone looking to enhance their skills, knowledge, and career prospects in tech, business, or any other field. Thank you for an excellent session!
            </h6>
          </div>
        </div>

        <div className="review_down_div text-center mt-5 ">
          <h3 className="text-warning">Your next chapter, made possible with mentorship.</h3>
          <h5>
            Explore 4000+ mentors from 60+ countries, to help you achieve and
            overcome any challenges you face.
          </h5>
          <div className="btn btn-primary shadow">Get Started</div>
        </div>
        <div className="footer mt-5">
          <h5>MenTors</h5>
          <div className="footer_right_content">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">FIND Mentors</a>
            <a href="">Public Forem</a>
            <a href="">MyTeetors</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
