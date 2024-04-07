import React from "react";
import "w3-css/w3.css";
import "./mentorcard.css";
export const Mentorcard = () => {
  const data = [
    {
      name: "Harry",
      job: "SOftware Dev",
      image: "./photo1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusanda dolores possimus pariatur animi temporibus nesciunt praesentium ",
    },
    {
      name: "Harry",
      job: "SOftware Dev",
      image: "./photo2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusanda dolores possimus pariatur animi temporibus nesciunt praesentium ",
    },
    {
      name: "Harry",
      job: "SOftware Dev",
      image: "./photo1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusanda dolores possimus pariatur animi temporibus nesciunt praesentium ",
    },
    {
      name: "Harry",
      job: "SOftware Dev",
      image: "./photo2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusanda dolores possimus pariatur animi temporibus nesciunt praesentium ",
    },
    {
      name: "Harry",
      job: "SOftware Dev",
      image: "./photo3.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusanda dolores possimus pariatur animi temporibus nesciunt praesentium ",
    },
  ];
  return (
    <div className="mentor_section">
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="mentorcard_section_heading"><p style={{fontSize:"30px",fontWeight:"700"}}>Some of our Mentors </p>
          <p style={{color:"violet"}}>
            We are a community of 50,000+ ambitious professionals, going further
            each day.
          </p></div>
          <button style={{height:"40px",alignSelf:"center"}} className="btn btn-primary ">Explore All</button>
        </div>
        
      </div>
      <div className="mentor-card-row d-inline-flex flex-row">
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card-image">
                  <img src="photo1.jpg" alt="" />
                  <p className="title text-dark text-center">Harry</p>
                  <p className=" text-light text-center ">Software Developer</p>
                  <p></p>
                </div>
              </div>
              <div className="card-back text-center">
                <p className="desc text-dark mt-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, impedit.
                </p>
                <div className="explore mt-5 btn btn-outline-info">
                  Book a session<span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card-image">
                  <img src="photo2.jpg" alt="" />
                  <p className="title text-center">Caroline</p>
                  <p className="text-light text-center">Public Speaker</p>
                </div>
              </div>
              <div className="card-back text-center">
                <p className="desc  text-dark mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, impedit.
                </p>
                <div className="explore mt-5 btn btn-outline-info">
                  Book a session<span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front ">
                <div style={{ height: "100%" }} className="card-image">
                  <img src="photo3.jpg" alt="" />
                  <p className="title text-dark text-center">John Doe</p>
                  <p className=" text-light text-center">Security Analyst</p>
                </div>
              </div>
              <div className="card-back text-center">
                <p className="desc  text-dark mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, impedit.
                </p>
                <div className="explore mt-5 btn btn-outline-info">
                  Book a session<span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front ">
                <div style={{ height: "100%" }} className="card-image">
                  <img src="photo4.jpg" alt="" />
                  <p className="title text-dark text-center">Jacob Periera</p>
                  <p className=" text-light text-center">Entrepreneur</p>
                </div>
              </div>
              <div className="card-back text-center ">
                <p className="desc  text-dark mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, impedit.
                </p>
                <div className="explore mt-5 btn btn-outline-info">
                  Book a session<span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front ">
                <div style={{ height: "100%" }} className="card-image">
                  <img src="photo5.jpg" alt="" />
                  <p className="title text-dark text-center">Alan Jefrey</p>
                  <p className=" text-light text-center">Businessman</p>
                </div>
              </div>
              <div className="card-back  text-center ">
                <p className="desc  text-dark mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, impedit.
                </p>
                <div className="explore mt-5 btn btn-outline-info">
                  Book a session<span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
