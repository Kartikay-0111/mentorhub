import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./landing.css";
function Landing() {
  return (
    <div className="body">
      <div className="design">
        <div className="svg">
          <img src="./th.jpeg" alt="" />
        </div>
      </div>
      <div className="main">
        <div className="innermain">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <a className="navbar-brand brand" href="#">
                MENTORS
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
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      style={{ color: "rgb(208, 125, 219)" }}
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      style={{ color: "rgb(208, 125, 219)" }}
                    >
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "rgb(208, 125, 219)" }}
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu bg-info-subtle">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "rgb(208, 125, 219)" }}
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "rgb(208, 125, 219)" }}
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "rgb(208, 125, 219)" }}
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      aria-disabled="true"
                      style={{ color: "rgb(208, 125, 219)" }}
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-outline-info me-2"
                  data-bs-target="#signinmodal"
                  data-bs-toggle="modal"
                  fdprocessedid="jnxsw"
                >
                  SIGN IN
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info me-2"
                  data-bs-target="#signupmodal"
                  data-bs-toggle="modal"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </nav>
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
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div id="scroll">
            <img src="./arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
