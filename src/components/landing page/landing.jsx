import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./landing.css";

function Landing({toggleSignup,toggleLogin,scrollToAbout,scrollToMentor,scrollToReview,scrollToHome}) {

  return (
    <div className="body">
      <div className="svg">
        <img src="./th.jpeg" alt="" />
      </div>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand brand" href="#">
            MENTORHUB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-0">
              <li style={{cursor:"pointer"}} className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  onClick={scrollToHome}
                >
                  Home
                </a>
              </li>
              <li style={{cursor:"pointer"}} className="nav-item">
                <a
                  onClick={scrollToAbout}
                  className="nav-link"
                >
                  About
                </a>
              </li>
              <li style={{cursor:"pointer"}} className="nav-item">
                <a
                  onClick={scrollToMentor}
                  className="nav-link"
                >
                  Top Mentors
                </a>
              </li>
              <li style={{cursor:"pointer"}} className="nav-item">
                <a
                  onClick={scrollToReview}
                  className="nav-link"
                >
                 Reviews
                </a>
              </li>

            </ul>
            <button
              type="button"
              className="btn btn-outline-info me-2"
              fdprocessedid="jnxsw"
              onClick={toggleLogin}
            >
              SIGN IN
            </button>
            <button
              type="button"
              className="btn btn-outline-info me-2"
              onClick={toggleSignup}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </nav>
      <div className="main">

        <div className="content">
          <h1>
            <div className="content1" style={{ color: "rgb(145, 152, 157)" }}>
              Learn and grow with help from
            </div>
            <div className="content2" style={{ color: "rgb(232, 92, 166)" }}>
              world-class mentors
            </div>
          </h1>
          <h5 className="content3" style={{ color: "rgb(64, 8, 58)" }}>
            Book and meet over 6,086+ mentors for 1:1 mentorship in our global
            community.
          </h5>
          <div className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search by company, language or role"
            />
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </div>
          </div>
        </div>
        <div id="scroll">
          <img src="./arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Landing;
