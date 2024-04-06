import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./review.css";
function Review() {
  return (
    <div>
        <div className="maindiv">
            <img src="./review_bg.png" alt="" />
            <div className="textdiv text-center mt-5 mb-5">
                <h5 className="text-secondary">Our testimonials</h5>
                <h1>Wins from all around the globe</h1>
            </div>
            <div className="carddiv row gap-5 justify-content-center">

                <div className="card col-9 shadow p-3 bg-primary text-light col-md-5 col-sm-5 col-lg-3 col-xlg-2 "> 
                <h3>Name Surname</h3>
                <h5>08-04-2024</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam exercitationem quae non ipsam eum ut autem nulla quibusdam voluptatum omnis fuga possimus, laudantium explicabo sit cupiditate sunt quidem accusantium?</h6>
                </div>
                <div className="card col-9 shadow p-3 col-md-4 col-sm-5 col-lg-3 col-xlg-2 "> 
                <h3>Name Surname</h3>
                <h5>08-04-2024</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam exercitationem quae non ipsam eum ut autem nulla quibusdam voluptatum omnis fuga possimus, laudantium explicabo sit cupiditate sunt quidem accusantium?</h6>
                </div>
                <div className="card col-9 shadow p-3 col-md-4 col-sm-5 col-lg-3 col-xlg-2 "> 
                <h3>Name Surname</h3>
                <h5>08-04-2024</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam exercitationem quae non ipsam eum ut autem nulla quibusdam voluptatum omnis fuga possimus, laudantium explicabo sit cupiditate sunt quidem accusantium?</h6>
                </div>
               
            </div>

            <div className="review_down_div text-center mt-5 ">
                <h3>Your next chapter, made possible with mentorship.</h3>
                <h5>Explore 4000+ mentors from 60+ countries, to help you achieve and overcome any challenges you face.</h5>
                <div className="btn btn-outline-primary shadow">Get Started</div>
                <div className="footer row">
                    <h5 className="col-2">MenTors</h5>
                    <div className="footer_right_content col-7 row gap-1 me-4">
                        <a href="" className="col">Home</a>
                        <a href="" className="col">Contact</a>
                        <a href="" className="col">FIND Mentors</a>
                        <a href="" className="col">Public Forem</a>
                        <a href=""className="col">MyTeetors</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Review;
